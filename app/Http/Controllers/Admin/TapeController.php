<?php

namespace App\Http\Controllers\Admin;

use App\Material;
use App\Production;
use App\Profile;
use App\Reclama;
use App\Technology;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class TapeController extends Controller
{
    public function index(){
        $data['profile'] = Profile::where('user_id', Auth::id())->first();
        if (empty($data['profile'])){
            $profile = new Profile;
            $profile->user_id = Auth::id();
            $profile->company = '';
            $profile->address = '';
            $profile->contact = '';
            $profile->file = '';
            $profile->save();
            $data['profile'] = Profile::where('user_id', Auth::id())->first();
        }
        $data['productions'] = Production::all();
        $data['technologies'] = Technology::all();
        $data['materials'] = Material::all();
        $data['reclama'] = Reclama::where('user_id', Auth::id())->get();

        return view('admin.index', $data);
    }
}
