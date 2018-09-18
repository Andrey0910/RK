<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', 'Front\TapeController@index');
Route::get('front/geo', 'Front\GeoController@index');
Route::get('front/cities/edit', 'Front\CitiesController@edit');
Route::post('front/cities/update', 'Front\CitiesController@update');
Route::get('front/filter', 'Front\TapeController@filter');

Route::group(['middleware' => 'auth'], function () {
    Route::get('/admin', 'Admin\TapeController@index');
    Route::get('admin/geo', 'Admin\GeoController@index');
    Route::post('admin/profile/update', 'Admin\ProfileController@update');
    Route::post('admin/addreclama/store', 'Admin\AddReclamaController@store');
});

Route::post('/login', ['uses'=>'Auth\LoginController@authenticated']);
Route::get('/logout', 'Auth\LoginController@logout');