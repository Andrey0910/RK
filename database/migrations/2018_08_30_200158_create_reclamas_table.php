<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReclamasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reclamas', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->integer('production_id')->nullable();
            $table->integer('technology_id')->nullable();
            $table->integer('material_id')->nullable();
            $table->string('file', 255);
            $table->text('comment');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reclamas');
    }
}
