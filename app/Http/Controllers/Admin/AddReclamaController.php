<?php

namespace App\Http\Controllers\Admin;

use App\Reclama;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\ImageManager;
use App\Traits\NullableFields;

class AddReclamaController extends Controller
{
    use NullableFields;

    public function store(Request $request){
        $data = $request->only(['product_id', 'technology_id', 'material_id', 'photo', 'comment']);
        $reclama = new Reclama();
        $reclama->user_id = Auth::id();
        $reclama->production_id = $data['product_id'];
        $reclama->technology_id = $data['technology_id'];
        $reclama->material_id = $data['material_id'];
        $reclama->file = trim($data['photo']) == '' ? '' :  $this->addPhoto($data['photo']);
        $reclama->comment = $this->trimIfEmpty($data['comment']);
        $reclama->save();

        return redirect('/admin');
    }

    public function addPhoto($file)
    {
        $fileName = $file->getClientOriginalName();
        $arr = explode('.', $fileName);
        $fileName = md5($arr[0]).'.'.$arr[1];
        $realPath = $file->getRealPath();
        $manager = new ImageManager(array('driver' => 'gd')); // Вместо "imagick" должно быть прописано "gd"
        // to finally create image instances
        $img = $manager->make($realPath);

        $file_img_path = env('FILE_IMG_PATH');

        $dir = public_path($file_img_path);

        //сохроняем оригинвльную картинку
        $this->resizeImg($dir, $fileName, $img);
        //вырезаем середину и сохраняем картинку
        $this->fitImg($dir, $fileName, $img);

        $userDirFile = '/' . Auth::id() . '/' . $fileName;
        return $userDirFile;
    }

    public function resizeImg($dir, $fileName, $img){
        $user_dir = $dir.'\\'.Auth::id();
        if (!file_exists($user_dir)) {
            mkdir($user_dir, 0700, true);
        }
        $pathLocal = $user_dir. "\\" . $fileName;
        //подгоняем картинку под определенный размер
        $img->resize(null, 500, function ($constraint){
            $constraint->aspectRatio();
            $constraint->upsize();
        });
        //созроняем картинку
        $img->save($pathLocal, 60);
    }

    public function fitImg($dir, $fileName, $img){
        //вырезаем середину картинки
        $img->fit(207, 207, function ($constraint) {
            $constraint->upsize();
        });
        $fit_file_img_path = env('FIT_FILE_IMG_PATH');
        $fit_user_dir = $dir.'\\'.$fit_file_img_path.'\\'.Auth::id();
        if (!file_exists($fit_user_dir)) {
            mkdir($fit_user_dir, 0700, true);
        }
        $pathLocal = $fit_user_dir. "\\" . $fileName;
        //сохраняем обрезанную картинку
        $img->save($pathLocal, 60);
    }
}
