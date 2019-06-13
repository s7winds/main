$(document).ready(function(){


        var $menu = $("#scroll_menu");

        $(window).scroll(function(){
            if ( $(this).scrollTop() > 10 && $menu.hasClass("default") ){
                $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 10 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });//scroll

$('.vid1').click(function(){
  $('.b-vid1').addClass('show');
  $('.b-views-line').addClass('not-show');
  $('.b-views-center-block').addClass('not-show');
});
$('.vid1_b').click(function(){
  $('.b-vid1').removeClass('show');
  $('.b-views-line').removeClass('not-show');
  $('.b-views-center-block').removeClass('not-show');
});

$('.vid2').click(function(){
  $('.b-vid2').addClass('show');
  $('.b-views-line').addClass('not-show');
  $('.b-views-center-block').addClass('not-show');
});
$('.vid2_b').click(function(){
  $('.b-vid2').removeClass('show');
  $('.b-views-line').removeClass('not-show');
  $('.b-views-center-block').removeClass('not-show');
});

$('.vid3').click(function(){
  $('.b-vid3').addClass('show');
  $('.b-views-line').addClass('not-show');
  $('.b-views-center-block').addClass('not-show');
});
$('.vid3_b').click(function(){
  $('.b-vid3').removeClass('show');
  $('.b-views-line').removeClass('not-show');
  $('.b-views-center-block').removeClass('not-show');
});

$('.vid4').click(function(){
  $('.b-vid4').addClass('show');
  $('.b-views-line').addClass('not-show');
  $('.b-views-center-block').addClass('not-show');
});
$('.vid4_b').click(function(){
  $('.b-vid4').removeClass('show');
  $('.b-views-line').removeClass('not-show');
  $('.b-views-center-block').removeClass('not-show');
});


$('.b-views-2-btn').click(function(){
  $('.b-views-2-block').addClass('show');
  $('.b-views-2-btn-block').addClass('not-show');
  $('.mgo-widget-call_pulse').addClass('not-show');
});
$('.b-views-2-btn_b').click(function(){
  $('.b-views-2-block').removeClass('show');
  $('.b-views-2-btn-block').removeClass('not-show');
  $('.mgo-widget-call_pulse').removeClass('not-show');
});





  $('#menu0').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $('#go-menu0').offset().top}, 800);
    return false;
  });
  $('#menu1').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $('#go-menu1').offset().top}, 800);
    return false;
  });
  $('#menu2').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $('#go-menu2').offset().top}, 800);
    return false;
  });
  $('#menu3').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $('#go-menu3').offset().top}, 800);
    return false;
  });
  $('#menu4').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $('#go-menu4').offset().top}, 800);
    return false;
  });
  $('#menu5').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $('#go-menu5').offset().top}, 800);
    return false;
  });
  $('#menu6').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $('#go-menu6').offset().top}, 800);
    return false;
  });
  $('#menu7').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $('#go-menu7').offset().top}, 800);
    return false;
  });
  $('#menu8').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $('#go-menu8').offset().top}, 800);
    return false;
  });

  $(function() {
      $('.b-8-command-item').matchHeight({
        byRow: false,
        property: 'height',
        target: null,
        remove: false
      });
  });






/*

(function( $ ){

$(function() {

  $('.form-main').each(function(){
    // Объявляем переменные (форма и кнопка отправки)
  var form = $(this),
        btn = form.find('.btn');

    // Добавляем каждому проверяемому полю, указание что поле пустое
  form.find('.form-control').addClass('empty_field');

    // Функция проверки полей формы
    function checkInput(){
      form.find('.form-control').each(function(){
        if($(this).val() != ''){
          // Если поле не пустое удаляем класс-указание
          $(this).removeClass('empty_field');
        } else {
          // Если поле пустое добавляем класс-указание
          $(this).addClass('empty_field');
        }
      });
    }

    // Функция проверки селекта
    function checkSelect(){
      form.find('.form-select').each(function(){
        if($(this).val() != 0){
          // Если поле не пустое удаляем класс-указание
          $(this).removeClass('empty_field');
        } else {
          // Если поле пустое добавляем класс-указание
          $(this).addClass('empty_field');
        }
      });

    }

    // Функция подсветки незаполненных полей
    function lightEmpty(){
      form.find('.empty_field').css({'border-color':'#d8512d'});
      // Через полсекунды удаляем подсветку
      setTimeout(function(){
        form.find('.empty_field').removeAttr('style');
      },500);
    }

    // Проверка в режиме реального времени
    setInterval(function(){
      // Запускаем функцию проверки полей на заполненность
    checkInput();
    checkSelect();
      // Считаем к-во незаполненных полей
      var sizeEmpty = form.find('.empty_field').size();
      // Вешаем условие-тригер на кнопку отправки формы
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }
    },500);

    // Событие клика по кнопке отправить
    btn.click(function(){
      if($(this).hasClass('disabled')){
        // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
    lightEmpty();
        return false
      } else {
        // Все хорошо, все заполнено, отправляем форму
          $(".f_contact").submit(function(e){
            e.preventDefault();
                $.ajax({
                    type: "POST",
                    url: "mail.php",
                    data: $(this).serialize()
                }).done(function() {
                    $.fancybox( $('#modal-thanks'), {
                        padding: 0,
                        fitToView: false
                    } );
                    setTimeout(function() {
                        $.fancybox.close();
                    }, 3000);
                });
                 return false;
          });
      }
    });
  });
});

})( jQuery );

*/




    google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {

        var styles = [
          {
            stylers: [
              { hue: "#00ffe6" },
              { saturation: -100 }
            ]
          },{
            featureType: "road",
            elementType: "geometry",
            stylers: [
              { lightness: 100 },
              { visibility: "simplified" }
            ]
          },{
            featureType: "road",
            elementType: "labels",
            stylers: [
              { visibility: "off" }
            ]
          }
        ];

        var mapOptions = {
            center: new google.maps.LatLng(55.703455, 37.586745),

            styles: styles,

            zoom: 16,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            scaleControl: true,
            scrollwheel: false,
            panControl: true,
            streetViewControl: false,
            draggable : true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,

        }


        var mapElement = document.getElementById('map_canvas');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
          ['Нескучный', 'undefined', 'undefined', 'undefined', 'undefined', 55.703516, 37.594008, 'http://webunicom.ru/place/snegiri/img/marker.png']
        ];
        for (i = 0; i < locations.length; i++) {
          if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
          if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
          if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
               if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
               if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
                marker = new google.maps.Marker({
                    icon: markericon,
                    position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                    map: map,
                    title: locations[i][0],
                    desc: description,
                    tel: telephone,
                    email: email,
                    web: web
                });
          link = '';
        }


}





});
