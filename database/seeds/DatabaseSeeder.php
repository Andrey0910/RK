<?php

use Illuminate\Database\Seeder;
use App\City;
use App\Production;
use App\Technology;
use App\Material;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call('CitiesTableSeeder');
        $this->command->info('Таблица городов загружена данными!');
        $this->call('ProductionsTableSeeder');
        $this->command->info('Таблица продукции загружена данными!');
        $this->call('TechnologiesTableSeeder');
        $this->command->info('Таблица технолоний загружена данными!');
        $this->call('MaterialsTableSeeder');
        $this->command->info('Таблица материалов загружена данными!');
    }
}

class CitiesTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('cities')->delete();

        $listCities = explode( ',','Архангельск, Астрахань, Барнаул, Белгород, Благовещенск, Братск,
                                           Брянск, Владивосток, Владикавказ, Владимир, Волгоград, Волжский,
                                            Вологда, Воронеж, Грозный, Екатеринбург, Иваново, Ижевск, Иркутск, Казань,
                                            Калининград, Калуга, Кемерово, Киров, Комсомольск-на-Амуре, Краснодар,
                                            Красноярск, Курган, Курск, Липецк, Магнитогорск, Махачкала, Москва,
                                            Мурманск, Набережные Челны, Нальчик, Нижний Новгород, Нижний Тагил, 
                                            Новокузнецк, Новосибирск, Омск, Орёл, Оренбург,  Пенза, Пермь, 
                                            Ростов-на-Дону, Рязань, Самара,  Санкт-Петербург,  Саранск, Саратов,
                                            Севастополь,  Симферополь,  Смоленск,  Сочи, Ставрополь, Сургут, Тамбов,
                                            Тверь, Тольятти, Томск,  Тула,  Тюмень, Улан - Удэ,  Ульяновск, Уфа,
                                            Хабаровск, Чебоксары,  Челябинск, Череповец, Чита, Якутск'
        );
        foreach ($listCities as $value){
            City::create(['name' => trim($value)]);
        }
    }
}
class ProductionsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('productions')->delete();

        $listProductions = explode( ',','Продукци 1, Продукци 2, Продукци 3, Продукци 4, Продукци 5');
        foreach ($listProductions as $value){
            Production::create(['name' => trim($value)]);
        }
    }
}
class TechnologiesTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('technologies')->delete();

        $listTechnologies = explode( ',','Технология 1, Технология 2, Технология 3, Технология 4, Технология 5');
        foreach ($listTechnologies as $value){
            Technology::create(['name' => trim($value)]);
        }
    }
}
class MaterialsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('materials')->delete();

        $listMaterials = explode( ',','Материал 1, Материал 2, Материал 3, Материал 4, Материал 5');
        foreach ($listMaterials as $value){
            Material::create(['name' => trim($value)]);
        }
    }
}