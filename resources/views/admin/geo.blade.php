<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>georeview-app</title>
    <link href="/css/admin/main-geo.css" rel="stylesheet">
</head>

<body>
<div class="wrapper">

    <div class="header">
        <div class="container clearfix">
            <div class="header__geo">
                <a href="#" class="geolocation" id="selectCountry">
                    <svg class="geolocation__img" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="20px" height="20px" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                         viewBox="0 0 2844 5870" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g>
                                <metadata />
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
                            <a href="/admin" class="menu__link">Лента</a>
                        </li>
                        <li class="menu__item">
                            <a href="#" class="menu__link">Карта</a>
                        </li>
                        <li class="menu__item">
                            <a href="#" class="menu__link">Помощь</a>
                        </li>
                    </ul>
                </div>
                <a href="#" class="auth" id="out">Выход</a>
            </div>
        </div>
    </div>

    <div class="section-map">
        <div class="section-map__header">
            <div class="container clearfix">
                <a href="index.html" class="section-map__link">Рекламное производство “СИЛА СОЛНЦА”</a>
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
                                    <metadata />
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
        <div class="section-map__count">
            -
            <span class="section-map__count-text" id="markers-count">5</span> -
        </div>
        <div id="map"></div>
    </div>

</div>
<div class="popup-overlay" id="overlay">
    <div class="popup" id="popup-map">
        <div class="popup__close"></div>
        <div class="popup__title">Добавить метку</div>
        <form action="#" class="form-map" method="POST" id="map-form">
            <div class="form-map__row clearfix">
                <span class="form-map__subtitle">Выберите тип метки:</span>
                <label class="form-map__name">
                    <input type="radio" name="marker" value="red" class="form-map__radio" checked>
                    <span class="form-map__radio-fake">
                            <svg class="section-map__marker-icon" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="20px" height="20px"
                                 style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                                 viewBox="0 0 14626 14626" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g>
                                    <metadata />
                                    <path fill="#FEFEFE" d="M7313 0c4039,0 7313,3274 7313,7313 0,4039 -3274,7313 -7313,7313 -4039,0 -7313,-3274 -7313,-7313 0,-4039 3274,-7313 7313,-7313z"
                                    />
                                    <path fill="#E31E24" d="M7313 1151c3403,0 6162,2759 6162,6162 0,3403 -2759,6162 -6162,6162 -3403,0 -6162,-2759 -6162,-6162 0,-3403 2759,-6162 6162,-6162z"
                                    />
                                </g>
                            </svg>
                            <span class="section-map__marker-name">Аренда рекламных проверхностей</span>
                        </span>
                </label>
                <label class="form-map__name">
                    <input type="radio" name="marker" value="green" class="form-map__radio">
                    <span class="form-map__radio-fake">
                            <svg class="section-map__marker-icon" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="20px" height="20px"
                                 style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                                 viewBox="0 0 14626 14626" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g>
                                    <metadata />
                                    <path fill="#FEFEFE" d="M7313 0c4039,0 7313,3274 7313,7313 0,4039 -3274,7313 -7313,7313 -4039,0 -7313,-3274 -7313,-7313 0,-4039 3274,-7313 7313,-7313z"
                                    />
                                    <path fill="#00cc00" d="M7313 1151c3403,0 6162,2759 6162,6162 0,3403 -2759,6162 -6162,6162 -3403,0 -6162,-2759 -6162,-6162 0,-3403 2759,-6162 6162,-6162z"
                                    />
                                </g>
                            </svg>
                            <span class="section-map__marker-name">Наружная реклама</span>
                        </span>
                </label>
                <label class="form-map__name">
                    <input type="radio" name="marker" value="perple" class="form-map__radio">
                    <span class="form-map__radio-fake">
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
                            <span class="section-map__marker-name">Адрес</span>
                        </span>
                </label>
            </div>
            <div class="form-map__row clearfix">
                <label class="form-map__name form-map__name_db form-map__name_nofloat">
                    <span class="form-map__name-text">Описание метки:</span>
                    <input type="text" name="title" class="form-map__input" placeholder="Максимум 128 букв">
                </label>
            </div>
            <div class="form-map__row form-map__row_mb_10 clearfix">
                <label class="form-map__name column">
                    <input class="form-map__file" type="file" name="photo_1" accept="image/jpeg,image/png">
                    <span class="form-map__file-fake">Выбрать фото</span>
                    <span class="form-map__file-name">Файл не выбран</span>
                </label>
                <div class="form-map__file-desc">
                    <span class="form-map__file-desc-title">Описание изображения:</span>
                    <input type="text" class="form-map__file-desc-input" name="photo-desc_1" placeholder="Максимум 32 буквы">
                </div>
            </div>
            <div class="form-map__row form-map__row_mb_40 clearfix form-map__row_hidden">
                <label class="form-map__name column">
                    <input class="form-map__file" type="file" name="photo_2" accept="image/jpeg,image/png">
                    <span class="form-map__file-fake">Выбрать фото</span>
                    <span class="form-map__file-name">Файл не выбран</span>
                </label>
                <div class="form-map__file-desc">
                    <span class="form-map__file-desc-title">Описание изображения:</span>
                    <input type="text" class="form-map__file-desc-input" name="photo-desc_2" placeholder="Максимум 32 буквы">
                </div>
            </div>
            <input type="submit" class="button button_send" value="Добавить">
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

    <div class="popup" id="popup-edit">
        <div class="popup__close"></div>
        <div class="popup__title">Редактировать метку</div>
        <form action="#" class="form-map" method="POST" id="edit-form">
            <div class="form-map__row clearfix">
                <span class="form-map__subtitle">Выберите тип метки:</span>
                <label class="form-map__name">
                    <input type="radio" name="marker" value="red" class="form-map__radio" checked>
                    <span class="form-map__radio-fake">
                            <svg class="section-map__marker-icon" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="20px" height="20px"
                                 style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                                 viewBox="0 0 14626 14626" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g>
                                    <metadata />
                                    <path fill="#FEFEFE" d="M7313 0c4039,0 7313,3274 7313,7313 0,4039 -3274,7313 -7313,7313 -4039,0 -7313,-3274 -7313,-7313 0,-4039 3274,-7313 7313,-7313z"
                                    />
                                    <path fill="#E31E24" d="M7313 1151c3403,0 6162,2759 6162,6162 0,3403 -2759,6162 -6162,6162 -3403,0 -6162,-2759 -6162,-6162 0,-3403 2759,-6162 6162,-6162z"
                                    />
                                </g>
                            </svg>
                            <span class="section-map__marker-name">Аренда рекламных проверхностей</span>
                        </span>
                </label>
                <label class="form-map__name">
                    <input type="radio" name="marker" value="green" class="form-map__radio">
                    <span class="form-map__radio-fake">
                            <svg class="section-map__marker-icon" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="20px" height="20px"
                                 style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                                 viewBox="0 0 14626 14626" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g>
                                    <metadata />
                                    <path fill="#FEFEFE" d="M7313 0c4039,0 7313,3274 7313,7313 0,4039 -3274,7313 -7313,7313 -4039,0 -7313,-3274 -7313,-7313 0,-4039 3274,-7313 7313,-7313z"
                                    />
                                    <path fill="#00cc00" d="M7313 1151c3403,0 6162,2759 6162,6162 0,3403 -2759,6162 -6162,6162 -3403,0 -6162,-2759 -6162,-6162 0,-3403 2759,-6162 6162,-6162z"
                                    />
                                </g>
                            </svg>
                            <span class="section-map__marker-name">Наружная реклама</span>
                        </span>
                </label>
                <label class="form-map__name">
                    <input type="radio" name="marker" value="perple" class="form-map__radio">
                    <span class="form-map__radio-fake">
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
                            <span class="section-map__marker-name">Адрес</span>
                        </span>
                </label>
            </div>
            <div class="form-map__row clearfix">
                <label class="form-map__name form-map__name_db form-map__name_nofloat">
                    <span class="form-map__name-text">Описание метки:</span>
                    <input type="text" name="title" class="form-map__input" placeholder="Максимум 128 букв">
                </label>
            </div>
            <div class="form-map__row form-map__row_mb_10 clearfix">
                <label class="form-map__name column">
                    <input class="form-map__file" type="file" name="photo_1" accept="image/jpeg,image/png">
                    <span class="form-map__file-fake">Выбрать фото</span>
                    <span class="form-map__file-name">Файл не выбран</span>
                </label>
                <div class="form-map__file-desc">
                    <span class="form-map__file-desc-title">Описание изображения:</span>
                    <input type="text" class="form-map__file-desc-input" name="photo-desc_1" placeholder="Максимум 32 буквы">
                </div>
            </div>
            <div class="form-map__row form-map__row_mb_40 clearfix form-map__row_hidden">
                <label class="form-map__name column">
                    <input class="form-map__file" type="file" name="photo_2" accept="image/jpeg,image/png">
                    <span class="form-map__file-fake">Выбрать фото</span>
                    <span class="form-map__file-name">Файл не выбран</span>
                </label>
                <div class="form-map__file-desc">
                    <span class="form-map__file-desc-title">Описание изображения:</span>
                    <input type="text" class="form-map__file-desc-input" name="photo-desc_2" placeholder="Максимум 32 буквы">
                </div>
            </div>
            <input type="submit" id="add-button" class="button button_send button_mb_10" value="Изменить">
            <input type="submit" id="remove-button" class="button button_send" value="Удалить">
        </form>
    </div>
</div>
<script src="https://api-maps.yandex.ru/2.1.59/?lang=ru_RU">
</script>
<script src="/js/admin/main-geo.js"></script>
</body>

</html>