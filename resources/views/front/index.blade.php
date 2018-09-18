<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>georeview-app</title>
    <link href="/css/front/main.css" rel="stylesheet">
</head>

<body>
<div class="wrapper">

    <div class="header">
        <div class="container clearfix">
            <div class="header__geo">
                <a href="#" class="geolocation" id="selectCountry">
                    <svg class="geolocation__img" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="20px" height="20px" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                         viewBox="0 0 2844 5870" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Слой_x0020_1">
                                <metadata id="CorelCorpID_0Corel-Layer" />
                                <path class="fil0" d="M1422 934c401,0 726,368 726,822 0,454 -325,822 -726,822 -401,0 -726,-368 -726,-822 0,-454 325,-822 726,-822zm0 -934c785,0 1422,721 1422,1610 0,259 -54,503 -150,720l0 0 -1322 3540 -1211 -3517 0 0c-102,-222 -160,-475 -160,-743 0,-889 637,-1610 1422,-1610z"
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
                            <a href="#" class="menu__link menu__link_active">Лента</a>
                        </li>
                        <li class="menu__item">
                            <a href="/front/geo" class="menu__link">Карта</a>
                        </li>
                        <li class="menu__item">
                            <a href="#" class="menu__link">Помощь</a>
                        </li>
                    </ul>
                </div>
                @if(Auth::check())
                    <a href="/logout" class="auth">Выход</a>
                @else
                    <a href="#" class="auth" id="auth">Вход</a>
                @endif
            </div>
        </div>
    </div>

    <div class="main">

        <div class="container clearfix">
            <div class="category">
                <div class="category__btns">
                    <a href="#" class="button button_mb_15">Популярные</a>
                    <a href="#" class="button">Promo-группа</a>
                </div>
                <form action="front/filter" class="accordeon-form" method="get">
                    <div class="accordeon-category">
                        <ul class="accordeon-category__list">
                            <li class="accordeon-category__item accordeon-category__item_active">
                                <a href="#" class="accordeon-category__trigger">Продукция</a>
                                <div class="accordeon-category__wrap">
                                    <input type="text" class="filter" id="product_id" name="product_id" value="" hidden>
                                    <ul class="accordeon-category__inner-list">
                                        @foreach($productions as $value)
                                            <li class="accordeon-category__inner-item">
                                                <label class="accordeon-category__form-label">
                                                    <input class="product_id" type="button" name="product" value="{{$value->id}}">
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
                                    <input type="text" class="filter" id="technology_id" name="technology_id" value="" hidden>
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
                                    <input type="text" class="filter" id="material_id" name="material_id" value="" hidden>
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
                    <button class="button button_send button_color_orange" id="slide-button" type="submit">Показать</button>
                </form>
            </div>
            <div class="adv">
                <ul class="adv__list clearfix" id="adv_list">
                    @foreach($reclama as $value)
                        @if($value->file)
                            <li class="adv__item">
                                <a href="#" class="adv__link">
                                    <img src="{{'/'.env('FILE_IMG_PATH').'/'.env('FIT_FILE_IMG_PATH').$value->file}}" alt="adv1" class="adv__img">
                                    <div class="atr_path" id="{{$value->id}}" hidden></div>
                                </a>
                            </li>
                        @endif
                    @endforeach
                </ul>
            </div>
            <div class="firms">
                <h2 class="firms__title">Рекламные фирмы</h2>
                <div class="slider-firms">
                    <div class="slider-firms__container">
                        <ul class="slider-firms__list" id="slider-firms__list">
                            @foreach($firm as $value)
                                <li class="slider-firms__item">
                                    <a href="#" class="slider-firms__link">
                                            <span class="slider-firms__photo">
                                                <img src="/img/icon-firm.png" alt="" class="slider-firms__img">
                                            </span>
                                        <span class="slider-firms__text">{{$value->company}}</span>
                                    </a>
                                </li>
                            @endforeach
                            <li class="slider-firms__item">
                                <a href="#" class="slider-firms__link">
                                        <span class="slider-firms__photo">
                                            <img src="/img/icon-firm.png" alt="" class="slider-firms__img">
                                        </span>
                                    <span class="slider-firms__text">Рекламная группа "ВЖИК"</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="slider-firms__controls">
                        <a href="#" class="slider-firms__control slider-firms__control_down" id="down"></a>
                        <a href="#" class="slider-firms__control slider-firms__control_up" id="up"></a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
<div class="popup-overlay" id="overlay">
    <div class="popup" id="popup-auth">
        <div class="popup__close"></div>
        <div class="popup__title">Авторизация</div>
        <form id="login-form" action="{{ route('login') }}" class="form-auth" method="POST" aria-label="{{ __('Login') }}">
            @csrf
            <label class="form-auth__label">
                <span class="form-auth__label-text">Email</span>
                <input id="login_email" name="login_email" placeholder="example@mail.ru" class="form-auth__input">
                <div class="error error_login"></div>
            </label>
            <label class="form-auth__label">
                <span class="form-auth__label-text">Пароль</span>
                <input id="login_password" type="password" name="password" placeholder="Ваш пароль" class="form-auth__input">
            </label>
            <a href="#" class="form-auth__question form-auth__question_mb_20" id="repassword">Забыли пароль?</a>
            <button type="submit" class="button button_auth" id="button_auth">Войти</button>
            <span class="form-auth__question form-auth__question_color_gray">Нет аккаунта?</span>
            <a href="#" class="form-auth__question" id="register">Зарегистрируйтесь</a>
        </form>
    </div>

    <div class="popup" id="popup-repass">
        <div class="popup__close"></div>
        <div class="popup__title">Восстановление пароля</div>
        <form action="#" class="form-auth" method="POST">
            <label class="form-auth__label">
                <span class="form-auth__label-text">Email</span>
                <input type="email" name="email" placeholder="example@mail.ru" class="form-auth__input">
            </label>
            <button type="submit" class="button button_wide">Отправить</button>
        </form>
    </div>

    <div class="popup" id="registration">
        <div class="popup__close"></div>
        <div class="popup__title">Регистрация</div>
        <form action="{{ route('register') }}" class="form-auth" method="POST" aria-label="{{ __('Register') }}">
            @csrf
            <label class="form-auth__label">
                <span class="form-auth__label-text">Название компании</span>
                <input type="text" name="company" id="company" placeholder='"ООО ЗВЕЗДА"' class="form-auth__input">
                <div class="error error_company"></div>
            </label>
            <label class="form-auth__label">
                <span class="form-auth__label-text">Город</span>
                <select name="category" id="country" class="form-auth__select">
                    <option value="">Не выбрано</option>
                    @foreach($cities as $value)
                        <option value="{{$value->id}}">{{$value->name}}</option>
                    @endforeach
                </select>
                <div class="error error_category"></div>
            </label>
            <label class="form-auth__label">
                <span class="form-auth__label-text">Email</span>
                <input id="register_email" type="email" name="email" placeholder="example@mail.ru" class="form-auth__input">
                <div class="error error_email"></div>
            </label>
            <label class="form-auth__label form-group row">
                <span class="form-auth__label-text">Пароль</span>
                <input id="register_password" type="password" name="password" placeholder="Ваш пароль" class="form-auth__input">
                <div class="error error_password"></div>
            </label>
            <button type="submit" class="button button_auth button_regist" id="button_regist">Зарегистрироваться</button>
            <span class="form-auth__question form-auth__question_color_gray">Есть аккаунт?</span>
            <a href="#" class="form-auth__question" id="authorization">Авторизуйтесь</a>
        </form>
    </div>

    <div class="popup" id="сountry">
        <div class="popup__close"></div>
        <div class="popup__title">Выбрать город</div>
        <form action="front/cities/update" class="form-auth" method="POST">
            @csrf
            <div class="form-countries" id="list_cities">
            </div>
            <button type="submit" class="button button_wide button_regist">ОK</button>
        </form>
    </div>

    <div class="popup popup_company" id="popup-company">
        <div class="popup__close"></div>
        <div class="popup__date">
            <span class="popup__time">20:38</span> 30.06.18</div>
        <div class="popup-slider">
            <div class="popup-slider__container">
                <ul class="popup-slider__list" id="popup-slider__list">
                    @foreach($reclama as $value)
                        @if($value->file)
                            <li class="popup-slider__item" id="{{$value->id}}">
                                <a href="#" class="popup-slider__link">
                                    <img src="{{'/'.env('FILE_IMG_PATH').$value->file}}" alt="" class="popup-slider__img">
                                </a>
                            </li>
                        @endif
                    @endforeach
                    <li class="popup-slider__item active">
                        <a href="#" class="popup-slider__link">
                            <img id="popup-slider__img" src="/img/2.jpg" alt="" class="popup-slider__img">
                        </a>
                    </li>
                    <li class="popup-slider__item">
                        <a href="#" class="popup-slider__link">
                            <img src="/img/2.jpg" alt="" class="popup-slider__img">
                        </a>
                    </li>
                    <li class="popup-slider__item">
                        <a href="#" class="popup-slider__link">
                            <img src="/img/2.jpg" alt="" class="popup-slider__img">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="popup-slider__controls">
                <a href="#" class="popup-slider__control popup-slider__control_prev" id="prev"></a>
                <a href="#" class="popup-slider__control popup-slider__control_next" id="next"></a>
            </div>
        </div>
        <div class="popup__info">
            <div class="popup__info-left">
                <a href="#" class="button button_like">
                    <span class="count-like">21</span>
                    Нравится
                </a>
                <a href="#" class="button button_like">
                    <span class="count-like">9</span>
                    Не нравится
                </a>
            </div>
            <div class="popup__info-right">
                <a href="#" class="button button_discus" id="button-discus">
                    Обсуждение
                    <span class="count-mess">9</span>
                </a>
            </div>
        </div>
        <div class="popup__chat">
            <div class="company-desc">
                <a href="#" class="company-desc__link">"Городская реклама"</a>: Клеили под дождем, но вроде норм. В следующий раз будет лучше!</div>
            <div class="company-chat">
                <ul class="company-chat__list" id="list-chat">
                    <li class="company-chat__item">
                        <div class="company-chat__message">
                            <div class="company-chat__date">20:55 02.07.18</div>
                            <a href="#" class="company-chat__link">"ООО Заря":</a>Такое себе...</div>
                    </li>
                    <li class="company-chat__item">
                        <div class="company-chat__message">
                            <div class="company-chat__date">20:55 02.07.18</div>
                            <a href="#" class="company-chat__link">"ООО Заря":</a>Такое себе...</div>
                    </li>
                    <li class="company-chat__item">
                        <div class="company-chat__message">
                            <div class="company-chat__date">20:55 02.07.18</div>
                            <a href="#" class="company-chat__link">"ООО Заря":</a>Такое себе...</div>
                    </li>
                    <li class="company-chat__item">
                        <div class="company-chat__message">
                            <div class="company-chat__date">20:55 02.07.18</div>
                            <a href="#" class="company-chat__link">"ООО Заря":</a>Такое себе...</div>
                    </li>
                    <li class="company-chat__item">
                        <div class="company-chat__message">
                            <div class="company-chat__date">20:55 02.07.18</div>
                            <a href="#" class="company-chat__link">"ООО Заря":</a>Такое себе...</div>
                    </li>
                    <li class="company-chat__item">
                        <div class="company-chat__message">
                            <div class="company-chat__date">20:55 02.07.18</div>
                            <a href="#" class="company-chat__link">"ООО Заря":</a>Такое себе...</div>
                    </li>
                    <li class="company-chat__item">
                        <div class="company-chat__message">
                            <div class="company-chat__date">20:55 02.07.18</div>
                            <a href="#" class="company-chat__link">"ООО Заря":</a>Такое себе...</div>
                    </li>

                </ul>
                <form action="#" class="company-chat__form">
                    <input type="text" name="mess" class="company-chat__input" placeholder="Написать комментарий">
                    <button type="submit" class="button button_send">Отправить</button>
                </form>
            </div>
        </div>
    </div>

</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="/js/front/index.js"></script>
<script src="/js/front/main.js"></script>
</body>

</html>