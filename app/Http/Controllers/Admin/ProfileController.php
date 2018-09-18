<?php

namespace App\Http\Controllers\Admin;

use App\Profile;
use App\Traits\NullableFields;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\ImageManager;

class ProfileController extends Controller
{
    use NullableFields;

    public function update(Request $request){
        $data = $request->only(['company', 'address', 'contact', 'img']);
        $company = $this->trimIfEmpty($data['company']);
        $address = $this->trimIfEmpty($data['address']);
        $contact = $this->trimIfEmpty($data['contact']);
        $fileName = trim($data['img']) == '' ? '' : $this->addPhoto($data['img']);

        $profile = Profile::where('user_id', Auth::id())->firstOrFail();
        $profile->company = $company;
        $profile->address = $address;
        $profile->contact = $contact;
        $profile->file = $fileName;
        $profile->save();

        return redirect('/admin');
    }

    public function addPhoto($file)
    {
        $height = 226; //длинна в стилях проаисана в процентах поэтому она будет определяться динамически
        $fileName = $file->getClientOriginalName();
        $arr = explode('.', $fileName);
        $fileName = md5($arr[0]).'.'.$arr[1];
        $realPath = $file->getRealPath();
        $manager = new ImageManager(array('driver' => 'gd')); // Вместо "imagick" должно быть прописано "gd"
        // to finally create image instances
        $img = $manager->make($realPath);
        //Длинна будет втомвтически определяться под размер окна картинки
        $img->resize(null, $height, function ($constraint) {
            $constraint->aspectRatio();
        });
        $file_img_path = env('FILE_IMG_PATH');

        if (empty($file_img_path)){
            abort(404, 'Не указана параметр "FILE_IMG_PATH" в файле строек env.');
        }
        $profile_file_img_path = env('PROFILE_FILE_IMG_PATH');
        if (empty($file_img_path)){
            abort(404, 'Не указана параметр "PTOFILE_FILE_IMG_PATH" в файле строек env.');
        }
        $dir = public_path($file_img_path);
        $profile_user_dir = $dir.'\\'.$profile_file_img_path.'\\'.Auth::id();
        if (!file_exists($profile_user_dir)) {
            mkdir($profile_user_dir, 0700, true);
        }
        $pathLocal = $profile_user_dir. "\\" . $fileName;
        $img->save($pathLocal, 60);
        $userDirFile = '/' . Auth::id() . '/' . $fileName;

        return $userDirFile;
    }
}
