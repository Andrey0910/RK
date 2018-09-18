<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reclama extends Model
{
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function profile()
    {
        return $this->hasManyThrough('App\Profile', 'App\User');
    }

    public function filterPhoto($product_id, $technology_id, $material_id)
    {
        $queryBuilder = Reclama::select();

        if (empty($product_id)) {
            $queryBuilder->whereNull('production_id');
        } else {
            $queryBuilder->where('production_id', $product_id);
        }
        if (empty($technology_id)) {
            $queryBuilder->whereNull('technology_id');
        } else {
            $queryBuilder->where('technology_id', $technology_id);
        }
        if (empty($material_id)) {
            $queryBuilder->whereNull('material_id');
        } else {
            $queryBuilder->where('material_id', $material_id);
        }

        return $queryBuilder->get();
    }

    public function filterPhotoUserId($product_id, $technology_id, $material_id)
    {
        $queryBuilder = Reclama::select('user_id');

        if (empty($product_id)) {
            $queryBuilder->whereNull('production_id');
        } else {
            $queryBuilder->where('production_id', $product_id);
        }
        if (empty($technology_id)) {
            $queryBuilder->whereNull('technology_id');
        } else {
            $queryBuilder->where('technology_id', $technology_id);
        }
        if (empty($material_id)) {
            $queryBuilder->whereNull('material_id');
        } else {
            $queryBuilder->where('material_id', $material_id);
        }

        return $queryBuilder->distinct('user_id')->get();
    }
}
