$('#login-form').on('submit', function(e){
    e.preventDefault();
    $('.error').empty();
    var _token = $("input[name='_token']").val();
    var login_email = $('#login_email').val();
    var password = $('#login_password').val();
    var data = {
        _token: _token,
        email: login_email,
        password: password
    };
    $.ajax({
        url: '/login',
        type: 'POST',
        data: data,
        dataType: 'JSON',
        success: function (data) {
            if(data.auth){
                var loc = window.location;
                window.location = loc.protocol+"//"+loc.host+data.redirectPath;
            }else {
                $('.error_login').append(data.error);
            }
        }
    });

});

$('#auth, #register').on('click', function (e) {
    e.preventDefault();
    $('.error').empty();
});

$("#button_regist").on('click', function(e) {
    e.preventDefault();
    $('.error').empty();
    var _token = $("input[name='_token']").val();
    var company = $('#company').val();
    var category = $('#country').val();
    var email = $('#register_email').val();
    var password = $('#register_password').val();

    var data = {
        _token: _token,
        company: company,
        category: category,
        email: email,
        password: password
    };

    $.ajax({
        url: '/register',
        type:'POST',
        data: data,
        success: function(data) {
            if(data.auth){
                var loc = window.location;
                window.location = loc.protocol+"//"+loc.host+data.redirectPath;
            }else{
                printErrorMsg(data.error);
            }
        }
    });

    function printErrorMsg (msg) {
        $.each( msg, function( key, value ) {
            switch (key){
                case 'company' :
                    $('.error_company').append(value[0]);
                    break;
                case 'category' :
                    $('.error_category').append(value[0]);
                    break;
                case 'email' :
                    $('.error_email').append(value[0]);
                    break;
                case 'password' :
                    $('.error_password').append(value[0]);
                    break;
            }
        });
    }
});
//Список городов
$('#selectCountry').on('click', function () {
   $('#list_cities').empty();
   var elemAll = '<label class="form-auth__label">'+
                    '<input type="checkbox" name="all">'+
                    '<span class="form-auth__label-content">Выбрать все</span>'+
                '</label>';
    $('#list_cities').append(elemAll);
   $.ajax({
       url: 'front/cities/edit',
       type: 'get',
       dataType: 'JSON',
       success: function (data) {
           $.each(data.cities, function (index, value) {
               var check = '';
               if(value.status == 1){
                   check = 'checked';
               }
                var txtHtml = '<label class="form-auth__label">'+
                                '<input type="checkbox" name="city" '+'value="'+ value.id +'" '+ check +'>'+
                                '<span class="form-auth__label-content">'+ value.name +'</span>'+
                                // '<input type="text" name="id" value="'+value.id+'" hidden>'+
                            '</label>';
               $('#list_cities').append(txtHtml);
           })
       }
   });
});
$('.adv__link').on('click', function (e) {
    var atr_path = $(e.currentTarget).find('.atr_path').attr('id');
    $('.popup-slider__list').find('.popup-slider__item').removeClass('active');
    $('.popup-slider__list').find('#'+atr_path).toggleClass('active');
});

//Фильтр по Продукции, Технологиям, Материалам
$('.product_id').on('click', function (e) {
    var value = $(e.currentTarget).val();
    $('#product_id').val(value);
});
$('.technology_id').on('click', function (e) {
    var value = $(e.currentTarget).val();
    $('#technology_id').val(value);
});
$('.material_id').on('click', function (e) {
    var value = $(e.currentTarget).val();
    $('#material_id').val(value);
});
//Обработка нажатия кнопки "Показать" после выбора фильтра
$('#slide-button').on('click', function (e) {
    e.preventDefault();
    var data = {
        product_id: $('#product_id').val(),
        technology_id: $('#technology_id').val(),
        material_id: $('#material_id').val()
    };
    $.ajax({
        url: 'front/filter',
        type: 'get',
        data: data,
        dataType: 'json',
        success: function (data) {
            addImgMini(data);
            addImg(data);
            addFirm(data);
        }
    });
});
//Отрисовка обрезанных фото для галереи на главной странице
function addImgMini(data) {
    $('#adv_list').empty();
    $.each(data.photo, function (index, value) {
        var txtHtml =  '<li class="adv__item">'+
            '<a href="#" class="adv__link">'+
            '<img src="'+ data.pathPhotoMini + value.file +'" alt="adv1" class="adv__img">'+
            '<div class="atr_path" id="'+value.id+'" hidden></div>'+
            '</a>'+
            '</li>';
        $('#adv_list').append(txtHtml);
    });
}
//Отрисовка бльших фото в голереи для крупного плана
function addImg(data) {
    $('#popup-slider__list').empty();
    $.each(data.photo, function (index, value) {
        var txtHtml =  '<li class="popup-slider__item" id="">'+
                            '<a href="#" class="popup-slider__link">'+
                                '<img src="'+ data.pathPhoto + value.file +'" alt="" class="popup-slider__img">'+
                            '</a>'+
                        '</li>';
        $('#popup-slider__list').append(txtHtml);
    });
}
//Создание списка компаний
function addFirm(data) {
    $('#slider-firms__list').empty();
    $.each(data.firm, function (index, value) {
       var txtHtml = '<li class="slider-firms__item">'+
                        '<a href="#" class="slider-firms__link">'+
                            '<span class="slider-firms__photo">'+
                                '<img src="/img/icon-firm.png" alt="" class="slider-firms__img">'+
                            '</span>'+
                            '<span class="slider-firms__text">'+value[0].company+'</span>'+
                        '</a>'+
                    '</li>';
       $('#slider-firms__list').append(txtHtml);
    });
}
//Очищаем скрытый input если в нем ни чнего не выбрано
$('.accordeon-category__trigger').on('click', function (e) {
    var elemActiv = $(e.currentTarget).closest('.accordeon-category__item');
    if(elemActiv.hasClass('accordeon-category__item_active')){
        elemActiv.find('.filter').val('');
    }
});