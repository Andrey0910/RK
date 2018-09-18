<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>georeview-app</title>
    <link href="/css/front/geo.css" rel="stylesheet">
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
                            <a href="/" class="menu__link">Лента</a>
                        </li>
                        <li class="menu__item">
                            <a href="#" class="menu__link menu__link_active">Карта</a>
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

    <div class="section-map">
        <div class="section-map__header">
            <div class="container clearfix">
                <ul class="section-map__markers" id="filter-marker">
                    <li class="section-map__marker" id="Red">
                        <svg class="section-map__marker-icon" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="20px" height="20px"
                             style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                             viewBox="0 0 14626 14626" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g>
                                    <metadata />
                                    <path fill="#FEFEFE" d="M7313 0c4039,0 7313,3274 7313,7313 0,4039 -3274,7313 -7313,7313 -4039,0 -7313,-3274 -7313,-7313 0,-4039 3274,-7313 7313,-7313z"
                                    />
                                    <path fill="#ff0000" d="M7313 1151c3403,0 6162,2759 6162,6162 0,3403 -2759,6162 -6162,6162 -3403,0 -6162,-2759 -6162,-6162 0,-3403 2759,-6162 6162,-6162z"
                                    />
                                </g>
                            </svg>

                        <div class="section-map__marker-name">Аренда рекламных проверхностей</div>
                    </li>
                    <li class="section-map__marker" id="Green">
                        <svg class="section-map__marker-icon" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="20px" height="20px"
                             style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                             viewBox="0 0 14626 14626" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g>
                                    <metadata/>
                                    <path fill="#FEFEFE" d="M7313 0c4039,0 7313,3274 7313,7313 0,4039 -3274,7313 -7313,7313 -4039,0 -7313,-3274 -7313,-7313 0,-4039 3274,-7313 7313,-7313z"
                                    />
                                    <path fill="#00cc00" d="M7313 1151c3403,0 6162,2759 6162,6162 0,3403 -2759,6162 -6162,6162 -3403,0 -6162,-2759 -6162,-6162 0,-3403 2759,-6162 6162,-6162z"
                                    />
                                </g>
                            </svg>
                        <div class="section-map__marker-name">Наружная реклама</div>
                    </li>
                    <li class="section-map__marker" id="Perple">
                        <svg class="section-map__marker-icon" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="20px" height="20px"
                             style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                             viewBox="0 0 14626 14626" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g>
                                    <metadata />
                                    <path fill="#FEFEFE" d="M7313 0c4039,0 7313,3274 7313,7313 0,4039 -3274,7313 -7313,7313 -4039,0 -7313,-3274 -7313,-7313 0,-4039 3274,-7313 7313,-7313z"
                                    />
                                    <path fill="#6600ff" d="M7313 1151c3403,0 6162,2759 6162,6162 0,3403 -2759,6162 -6162,6162 -3403,0 -6162,-2759 -6162,-6162 0,-3403 2759,-6162 6162,-6162z"
                                    />
                                </g>
                            </svg>
                        <div class="section-map__marker-name">Адрес</div>
                    </li>
                </ul>
            </div>
        </div>
        <div id="map"></div>
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
        <form action="#" class="form-auth" method="POST">
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
                    <option value="Город 1">Город 1</option>
                    <option value="Город 2">Город 2</option>
                    <option value="Город 3">Город 3</option>
                    <option value="Город 4">Город 4</option>
                    <option value="Город 5">Город 5</option>
                </select>
                <div class="error error_category"></div>
            </label>
            <label class="form-auth__label">
                <span class="form-auth__label-text">Email</span>
                <input id="register_email" type="email" name="email" placeholder="example@mail.ru" class="form-auth__input">
                <div class="error error_email"></div>
            </label>
            <label class="form-auth__label">
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
        <form action="#" class="form-auth" method="POST">
            <div class="form-countries">
                <label class="form-auth__label">
                    <input type="checkbox" name="all">
                    <span class="form-auth__label-content">Выбрать все</span>
                </label>
                <label class="form-auth__label">
                    <input type="checkbox" name="Название города">
                    <span class="form-auth__label-content">Архангельск</span>
                </label>
                <label class="form-auth__label">
                    <input type="checkbox" name="Название города">
                    <span class="form-auth__label-content">Астрахать</span>
                </label>
                <label class="form-auth__label">
                    <input type="checkbox" name="Название города">
                    <span class="form-auth__label-content">Барнаул</span>
                </label>
                <label class="form-auth__label">
                    <input type="checkbox" name="Название города">
                    <span class="form-auth__label-content">Барнаул</span>
                </label>
                <label class="form-auth__label">
                    <input type="checkbox" name="Название города">
                    <span class="form-auth__label-content">Барнаул</span>
                </label>
                <label class="form-auth__label">
                    <input type="checkbox" name="Название города">
                    <span class="form-auth__label-content">Барнаул</span>
                </label>
                <label class="form-auth__label">
                    <input type="checkbox" name="Название города">
                    <span class="form-auth__label-content">Барнаул</span>
                </label>
                <label class="form-auth__label">
                    <input type="checkbox" name="Название города">
                    <span class="form-auth__label-content">Барнаул</span>
                </label>
                <label class="form-auth__label">
                    <input type="checkbox" name="Название города">
                    <span class="form-auth__label-content">Барнаул</span>
                </label>
                <label class="form-auth__label">
                    <input type="checkbox" name="Название города">
                    <span class="form-auth__label-content">Барнаул</span>
                </label>
                <label class="form-auth__label">
                    <input type="checkbox" name="Название города">
                    <span class="form-auth__label-content">Барнаул</span>
                </label>
                <label class="form-auth__label">
                    <input type="checkbox" name="Название города">
                    <span class="form-auth__label-content">Барнаул</span>
                </label>
                <label class="form-auth__label">
                    <input type="checkbox" name="Название города">
                    <span class="form-auth__label-content">Барнаул</span>
                </label>
                <label class="form-auth__label">
                    <input type="checkbox" name="Название города">
                    <span class="form-auth__label-content">Барнаул</span>
                </label>
                <label class="form-auth__label">
                    <input type="checkbox" name="Название города">
                    <span class="form-auth__label-content">Барнаул</span>
                </label>
                <label class="form-auth__label">
                    <input type="checkbox" name="Название города">
                    <span class="form-auth__label-content">Барнаул</span>
                </label>
            </div>
            <button type="submit" class="button button_wide button_regist">ОK</button>
        </form>
    </div>

</div>
<script src="https://api-maps.yandex.ru/2.1.59/?lang=ru_RU"></script>
<script src="/js/front/geo.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="/js/front/main.js"></script>
</body>

</html>