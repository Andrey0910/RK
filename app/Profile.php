<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $table = 'profiles';

    public function getByUserId($user_id){
        $result = Profile::where('user_id', $user_id)->get();
        return $result;
    }

    public function getAllDistinct(){
        $result = Profile::select('company')->distinct('company')->get();
        return $result;
    }
}
