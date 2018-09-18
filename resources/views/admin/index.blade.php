<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>georeview-app</title>
    <link href="/css/admin/main.css" rel="stylesheet">
</head>

<body>
<div class="wrapper">

    <div class="header">
        <div class="container clearfix">
            <div class="header__geo">
                <a href="#" class="geolocation">
                    <svg class="geolocation__img" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="20px" height="20px" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                         viewBox="0 0 2844 5870" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g>
                                <metadata />
                                <path d="M1422 934c401,0 726,368 726,822 0,454 -325,822 -726,822 -401,0 -726,-368 -726,-822 0,-454 325,-822 726,-822zm0 -934c785,0 1422,721 1422,1610 0,259 -54,503 -150,720l0 0 -1322 3540 -1211 -3517 0 0c-102,-222 -160,-475 -160,-743 0,-889 637,-1610 1422,-1610z"
                                />
                            </g>
                        </svg>

                    <span class="geolocation__link">Петрозаводск-Камчатский</span>
                </a>

            </div>
            <div class="header__menu">
                <div class="menu">
                    <ul class="menu__list clearfix">
                        <li class="menu__item">
                            <a href="/" class="menu__link">Лента</a>
                        </li>
                        <li class="menu__item">
                            <a href="/admin/geo" class="menu__link">Карта</a>
                        </li>
                        <li class="menu__item">
                            <a href="#" class="menu__link">Помощь</a>
                        </li>
                    </ul>
                </div>
                <a href="/logout" class="auth" id="out">Выход</a>
            </div>
        </div>
    </div>

    <div class="account-info">
        <div class="container  clearfix">
            <div class="account-info__photo">
                <img src="{{'/'.env('FILE_IMG_PATH').'/'.env('PROFILE_FILE_IMG_PATH').$profile->file}}" alt="" class="account-info__img" id="banner">
            </div>
            <div class="account-info__contacts">
                <h1 class="account-info__title" id="company-name">{{$profile->company}}</h1>
                <div class="account-info__address">
                    <div class="account-info__contact-title">Адрес</div>
                    <div class="account-info__contact-title">Адрес</div>
                    <p class="account-info__contact-text" id="address">{{$profile->address}}</p>
                </div>
                <div class="account-info__phones">
                    <div class="account-info__contact-title">Контакты</div>
                    <p class="account-info__contact-text" id="contact">{{$profile->contact}}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="main">

        <div class="container clearfix">
            <div class="category">
                <div class="category__btns">
                    <a href="#" class="button button_mb_15" id="redactor">Редактировать профиль</a>
                    <a href="geo.html" class="button button_map">Карта компании</a>
                </div>
                <form action="#" class="accordeon-form">
                    <div class="accordeon-category">
                        <ul class="accordeon-category__list">
                            <li class="accordeon-category__item accordeon-category__item_active">
                                <a href="#" class="accordeon-category__trigger">Продукция</a>
                                <div class="accordeon-category__wrap">
                                    <ul class="accordeon-category__inner-list">
                                        @foreach($productions as $value)
                                            <li class="accordeon-category__inner-item">
                                                <label class="accordeon-category__form-label">
                                                    <input type="button" name="product_id" value="{{$value->id}}">
                                                    <a class="accordeon-category__link">{{$value->name}}</a>
                                                </label>
                                            </li>
                                        @endforeach
                                    </ul>
                                </div>
                            </li>
                            <li class="accordeon-category__item">
                                <a href="#" class="accordeon-category__trigger">Технологии</a>
                                <div class="accordeon-category__wrap">
                                    <ul class="accordeon-category__inner-list">
                                        @foreach($technologies as $value)
                                            <li class="accordeon-category__inner-item">
                                                <label class="accordeon-category__form-label">
                                                    <input type="button" name="technology_id" value="{{$value->id}}">
                                                    <a class="accordeon-category__link">{{$value->name}}</a>
                                                </label>
                                            </li>
                                        @endforeach
                                    </ul>
                                </div>
                            </li>
                            <li class="accordeon-category__item">
                                <a href="#" class="accordeon-category__trigger">Материалы</a>
                                <div class="accordeon-category__wrap">
                                    <ul class="accordeon-category__inner-list">
                                        @foreach($materials as $value)
                                            <li class="accordeon-category__inner-item">
                                                <label class="accordeon-category__form-label">
                                                    <input type="button" name="material_id" value="{{$value->id}}">
                                                    <a class="accordeon-category__link">{{$value->name}}</a>
                                                </label>
                                            </li>
                                        @endforeach
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <button class="button button_send button_color_orange" id="slide-button" type="submit">Показать</button>
                </form>
            </div>
            <div class="adv">
                <ul class="adv__list clearfix" id="adv_list">
                    <li class="adv__item adv__item_add" id="add-adv">
                        <a href="#" class="adv__link adv__link_add">
                            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="100%" height="100%" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                                 viewBox="0 0 3615 3615" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <defs>
                                        <style type="text/css">
                                            .fil1 {
                                                fill: none
                                            }

                                            .fil0 {
                                                fill: #D9DADA
                                            }
                                        </style>
                                    </defs>
                                <g>
                                    <metadata />
                                    <polygon class="fil0" points="1772,1480 1843,1480 1843,1772 2135,1772 2135,1843 1843,1843 1843,2135 1772,2135 1772,1843 1480,1843 1480,1772 1772,1772 "
                                    />
                                    <rect class="fil1" x="6" y="6" width="3603" height="3603" />
                                </g>
                                </svg>
                        </a>
                    </li>
                    @foreach($reclama as $value)
                        @if($value->file)
                            <li class="adv__item">
                                <a class="adv__link">
                                    <img src="{{'/'.env('FILE_IMG_PATH').'/'.env('FIT_FILE_IMG_PATH').$value->file}}" alt="adv1" class="adv__img">
                                </a>
                            </li>
                        @endif
                    @endforeach
                    <li class="adv__item">
                        <a class="adv__link">
                            <img src="/img/2.png" alt="adv1" class="adv__img">
                        </a>
                    </li>
                    <li class="adv__item">
                        <a class="adv__link">
                            <img src="/img/2.png" alt="adv1" class="adv__img">
                        </a>
                    </li>
                    <li class="adv__item">
                        <a class="adv__link">
                            <img src="/img/2.png" alt="adv1" class="adv__img">
                        </a>
                    </li>
                    <li class="adv__item">
                        <a class="adv__link">
                            <img src="/img/2.png" alt="adv1" class="adv__img">
                        </a>
                    </li>
                    <li class="adv__item">
                        <a class="adv__link">
                            <img src="/img/2.png" alt="adv1" class="adv__img">
                        </a>
                    </li>
                    <li class="adv__item">
                        <a class="adv__link">
                            <img src="/img/2.png" alt="adv1" class="adv__img">
                        </a>
                    </li>
                    <li class="adv__item">
                        <a class="adv__link">
                            <img src="/img/2.png" alt="adv1" class="adv__img">
                        </a>
                    </li>
                    <li class="adv__item">
                        <a class="adv__link">
                            <img src="/img/2.png" alt="adv1" class="adv__img">
                        </a>
                    </li>
                    <li class="adv__item">
                        <a class="adv__link">
                            <img src="/img/2.png" alt="adv1" class="adv__img">
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</div>
<div class="popup-overlay" id="overlay">
    <div class="popup" id="popup-save">
        <div class="popup__close"></div>
        <form action="admin/profile/update" id="save-form" class="form-auth" method="POST" enctype="multipart/form-data">
            @csrf
            <label class="form-auth__label">
                <input class="form-auth__file" id="file" type="file" name="img" accept="/image/jpeg,image/png">
                <span class="form-auth__file-fake">Выбрать фото</span>
                <span class="form-auth__file-name">Файл не выбран</span>
            </label>
            <label class="form-auth__label">
                <span class="form-auth__label-text">Название компании</span>
                <input type="text" name="company" id="input-company" class="form-auth__input" value="{{$profile->company}}">
            </label>
            <label class="form-auth__label">
                <span class="form-auth__label-text">Адрес</span>
                <textarea name="address" id="input-address" class="form-auth__input form-auth__input_area">{{$profile->address}}</textarea>
            </label>
            <label class="form-auth__label">
                <span class="form-auth__label-text">Контакты</span>
                <textarea name="contact" id="input-contact" class="form-auth__input form-auth__input_area">{{$profile->contact}}</textarea>
            </label>
            <button type="submit" class="button button_save">Сохранить</button>
        </form>
    </div>

    <div class="popup" id="popup-add">
        <div class="popup__close"></div>
        <form id="add-form" action="admin/addreclama/store" class="form-auth clearfix" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="form-auth__left">
                <div class="accordeon-category accordeon-category_popup">
                    <ul class="accordeon-category__list">
                        <li class="accordeon-category__item">
                            <a href="#" class="accordeon-category__trigger">Продукция</a>
                            <div class="accordeon-category__wrap">
                                <input type="text" id="product_id" name="product_id" value="" hidden>
                                <ul class="accordeon-category__inner-list">
                                    @foreach($productions as $value)
                                        <li class="accordeon-category__inner-item">
                                            <label class="accordeon-category__form-label">
                                                <input type="button" class="product_id" name="product" value="{{$value->id}}">
                                                <a class="accordeon-category__link">{{$value->name}}</a>
                                            </label>
                                        </li>
                                    @endforeach
                                </ul>
                            </div>
                        </li>
                        <li class="accordeon-category__item">
                            <a href="#" class="accordeon-category__trigger">Технологии</a>
                            <div class="accordeon-category__wrap">
                                <input type="text" id="technology_id" name="technology_id" value="" hidden>
                                <ul class="accordeon-category__inner-list">
                                    @foreach($technologies as $value)
                                        <li class="accordeon-category__inner-item">
                                            <label class="accordeon-category__form-label">
                                                <input type="button" class="technology_id" name="technology" value="{{$value->id}}">
                                                <a class="accordeon-category__link">{{$value->name}}</a>
                                            </label>
                                        </li>
                                    @endforeach
                                </ul>
                            </div>
                        </li>
                        <li class="accordeon-category__item">
                            <a href="#" class="accordeon-category__trigger">Материалы</a>
                            <div class="accordeon-category__wrap">
                                <input type="text" id="material_id" name="material_id" value="" hidden>
                                <ul class="accordeon-category__inner-list">
                                    @foreach($materials as $value)
                                        <li class="accordeon-category__inner-item">
                                            <label class="accordeon-category__form-label">
                                                <input type="button" class="material_id" name="material" value="{{$value->id}}">
                                                <a class="accordeon-category__link">{{$value->name}}</a>
                                            </label>
                                        </li>
                                    @endforeach
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="form-auth__right">
                <label class="form-auth__label">
                    <input class="form-auth__file" type="file" name="photo" accept="/image/jpeg,image/png">
                    <span class="form-auth__file-fake">Выбрать фото</span>
                    <span class="form-auth__file-name">Файл не выбран</span>
                </label>
                <label class="form-auth__label">
                    <span class="form-auth__label-text">Комментарий</span>
                    <input id="comment" type="text" name="comment" placeholder="комментарий..." class="form-auth__input">
                </label>
                <button type="submit" class="button button_add">Добавить</button>
            </div>
        </form>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="/js/admin/index.js"></script>
<script src="/js/admin/main.js"></script>
<script src="/js/admin/edit.js"></script>
</body>

</html>