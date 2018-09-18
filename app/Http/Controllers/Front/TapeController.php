<?php

namespace App\Http\Controllers\Front;

use App\City;
use App\Material;
use App\Production;
use App\Profile;
use App\Reclama;
use App\Technology;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TapeController extends Controller
{
    public function index()
    {
        $data['productions'] = Production::all();
        $data['technologies'] = Technology::all();
        $data['materials'] = Material::all();
        $data['reclama'] = Reclama::all();
        $data['cities'] = City::all();
        $profile = new Profile();
        $data['firm'] = $profile->getAllDistinct();

        return view('front.index', $data);
    }

    public function filter(Request $request)
    {
        $data_request = $request->only(['product_id', 'technology_id', 'material_id']);
        $product_id = $data_request['product_id'];
        $technology_id = $data_request['technology_id'];
        $material_id = $data_request['material_id'];
        $reclama = new Reclama();
        $photo = $reclama->filterPhoto($product_id, $technology_id, $material_id);
        $pathPhotoMini = '/'.env('FILE_IMG_PATH').'/'.env('FIT_FILE_IMG_PATH');
        $pathPhoto = '/'.env('FILE_IMG_PATH');
        $userIds = $reclama->filterPhotoUserId($product_id, $technology_id, $material_id);
        $profile = new Profile();
        $firm = [];
        foreach ($userIds as $value) {
            $firm[] = $profile->getByUserId($value->user_id);
        }

        return response()->json([
            'photo' => $photo,
            'pathPhotoMini' => $pathPhotoMini,
            'pathPhoto' => $pathPhoto,
            'firm' => $firm
            ]);
    }
}
