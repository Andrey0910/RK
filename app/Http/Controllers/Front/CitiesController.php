<?php

namespace App\Http\Controllers\Front;

use App\City;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CitiesController extends Controller
{
    public function edit(){
        $data['cities'] = City::all();
        //dd($data['cities']);
        return response()->json([
            'cities' => $data['cities']
        ]);
    }

    public function update(Request $request){
        $data = $request->only(['city']);
        dd($data);
    }
}
