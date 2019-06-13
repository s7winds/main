$(document).ready(function(){


        var $menu = $("#scroll_menu");

        $(window).scroll(function(){
            if ( $(this).scrollTop() > 10 && $menu.hasClass("default") ){
                $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 10 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });//scroll
/*
countDown(7,2,2,31,2,2017); //устанавливаем таймер на желаемую дату в формате секунда, минута, час, день, месяц, год

Number.prototype.pad = function(size) {
      var s = String(this);
      if(typeof(size) !== "number"){size = 2;}

      while (s.length < size) {s = "0" + s;}
      return s;
}


function countDown(second,endMinute,endHour,endDay,endMonth,endYear) {
  var now = new Date();
  second = (arguments.length == 1) ? second + now.getSeconds() : second;
  endYear =  typeof(endYear) != 'undefined' ?  endYear : now.getFullYear();
  endMonth = endMonth ? endMonth - 1 : now.getMonth();  //номер месяца начинается с 0
  endDay = typeof(endDay) != 'undefined' ? endDay :  now.getDate();
  endHour = typeof(endHour) != 'undefined' ?  endHour : now.getHours();
  endMinute = typeof(endMinute) != 'undefined' ? endMinute : now.getMinutes();
  //добавляем секунду к конечной дате (таймер показывает время уже спустя 1с.)
  var endDate = new Date(endYear,endMonth,endDay,endHour,endMinute,second+1);
  var interval = setInterval(function() { //запускаем таймер с интервалом 1 секунду
      var time = endDate.getTime() - now.getTime();
      if (time < 0) {                      //если конечная дата меньше текущей
          clearInterval(interval);
          alert("Неверная дата!");
      } else {
          var days = Math.floor(time / 864e5);
          var hours = Math.floor(time / 36e5) % 24;
          var minutes = Math.floor(time / 6e4) % 60;
          var seconds = Math.floor(time / 1e3) % 60;
          var digit='<div class="timer-digit">'+
          '<div class="timer-number">';
          var text='</div><div class="timer-text">'
          var end='</div></div><div class="timer-dots">:</div>'
          document.getElementById('mytimer').innerHTML =
          digit+days.pad(2)+text+'дни'+end+digit+hours.pad(2)+text+'часы'+end+
          digit+minutes.pad(2)+text+'минуты'+end+digit+seconds.pad(2)+text+'секунды';
          if (!seconds && !minutes && !days && !hours) {
              clearInterval(interval);
              alert("Время вышло!");
          }
      }
      now.setSeconds(now.getSeconds() + 1); //увеличиваем текущее время на 1 секунду
  }, 1000);
}
*/


  $(function(){
    $('.etaj').hover(function(){
      $('.b-4-btn').addClass('not-show');
    },
    function(){
      $('.b-4-btn').removeClass('not-show');
    });
  });





        $(window).on('resize', function() {
            if($(window).width()>768){
              $('.sect-2').addClass('big-ekran');
              $('.sect-2').removeClass('small-ekran');
              $('.sect-7').addClass('big-ekran');
              $('.sect-7').removeClass('small-ekran');

                $(function(){
                  $('.big-ekran .b-2-left').hover(function(){
                    $('.big-ekran .b-2-btn-info-left').show(0);
                    $('.big-ekran .b-2-left .b-2-btn-inner').hide(0);
                    $('.big-ekran .left-overlay').show(0);
                    $('.big-ekran .b-2-left .b-2-btn').css('height', '100%');
                    $('.big-ekran .b-2-left .b-2-btn').css('width', '100%');
                    $('.big-ekran .b-2-left .b-2-btn').css('border', '0');
                  },
                  function(){
                    $('.big-ekran .b-2-btn-info-left').hide(0);
                    $('.big-ekran .b-2-left .b-2-btn-inner').show(0);
                    $('.big-ekran .left-overlay').hide(0);
                    $('.big-ekran .b-2-left .b-2-btn').css('height', 'auto');
                    $('.big-ekran .b-2-left .b-2-btn').css('width', 'auto');
                    $('.big-ekran .b-2-left .b-2-btn').css('border', '3px solid #c4c4c4');
                  });
                });

                $(function(){
                  $('.big-ekran .b-2-right ').hover(function(){
                    $('.big-ekran .b-2-btn-info-right').show(0);
                    $('.big-ekran .b-2-right .b-2-btn-inner').hide(0);
                    $('.big-ekran .right-overlay').show(0);
                    $('.big-ekran .b-2-right .b-2-btn').css('height', '100%');
                    $('.big-ekran .b-2-right .b-2-btn').css('width', '100%');
                    $('.big-ekran .b-2-right .b-2-btn').css('border', '0');
                  },
                  function(){
                    $('.big-ekran .b-2-btn-info-right').hide(0);
                    $('.big-ekran .b-2-right .b-2-btn-inner').show(0);
                    $('.big-ekran .right-overlay').hide(0);
                    $('.big-ekran .b-2-right .b-2-btn').css('height', 'auto');
                    $('.big-ekran .b-2-right .b-2-btn').css('width', 'auto');
                    $('.big-ekran .b-2-right .b-2-btn').css('border', '3px solid #c4c4c4');
                  });
                });


                $(function(){
                  $('.big-ekran .b-7-top .b-7-left ').hover(function(){
                    $('.big-ekran .b-7-top .b-7-btn-info-left').show(0);
                    $('.big-ekran .b-7-top .b-7-left .b-7-btn-inner').hide(0);
                    $('.big-ekran .b-7-top .left-overlay').show(0);
                    $('.big-ekran .b-7-top .b-7-left .b-7-btn').css('height', '100%');
                    $('.big-ekran .b-7-top .b-7-left .b-7-btn').css('width', '100%');
                  },
                  function(){
                    $('.big-ekran .b-7-top .b-7-btn-info-left').hide(0);
                    $('.big-ekran .b-7-top .b-7-left .b-7-btn-inner').show(0);
                    $('.big-ekran .b-7-top .left-overlay').hide(0);
                    $('.big-ekran .b-7-top .b-7-left .b-7-btn').css('height', 'auto');
                    $('.big-ekran .b-7-top .b-7-left .b-7-btn').css('width', 'auto');
                  });
                });
                $(function(){
                  $('.big-ekran .b-7-top .b-7-right').hover(function(){
                    $('.big-ekran .b-7-top .b-7-btn-info-right').show(0);
                    $('.big-ekran .b-7-top .b-7-right .b-7-btn-inner').hide(0);
                    $('.big-ekran .b-7-top .right-overlay').show(0);
                    $('.big-ekran .b-7-top .b-7-right .b-7-btn').css('height', '100%');
                    $('.big-ekran .b-7-top .b-7-right .b-7-btn').css('width', '100%');
                  },
                  function(){
                    $('.big-ekran .b-7-top .b-7-btn-info-right').hide(0);
                    $('.big-ekran .b-7-top .b-7-right .b-7-btn-inner').show(0);
                    $('.big-ekran .b-7-top .right-overlay').hide(0);
                    $('.big-ekran .b-7-top .b-7-right .b-7-btn').css('height', 'auto');
                    $('.big-ekran .b-7-top .b-7-right .b-7-btn').css('width', 'auto');
                  });
                });

                $(function(){
                  $('.big-ekran .b-7-bot .b-7-left').hover(function(){
                    $('.big-ekran .b-7-bot .b-7-btn-info-left').show(0);
                    $('.big-ekran .b-7-bot .b-7-left .b-7-btn-inner').hide(0);
                    $('.big-ekran .b-7-bot .left-overlay').show(0);
                    $('.big-ekran .b-7-bot .b-7-left .b-7-btn').css('height', '100%');
                    $('.big-ekran .b-7-bot .b-7-left .b-7-btn').css('width', '100%');
                  },
                  function(){
                    $('.big-ekran .b-7-bot .b-7-btn-info-left').hide(0);
                    $('.big-ekran .b-7-bot .b-7-left .b-7-btn-inner').show(0);
                    $('.big-ekran .b-7-bot .left-overlay').hide(0);
                    $('.big-ekran .b-7-bot .b-7-left .b-7-btn').css('height', 'auto');
                    $('.big-ekran .b-7-bot .b-7-left .b-7-btn').css('width', 'auto');
                  });
                });
                $(function(){
                  $('.big-ekran .b-7-bot .b-7-right').hover(function(){
                    $('.big-ekran .b-7-bot .b-7-btn-info-right').show(0);
                    $('.big-ekran .b-7-bot .b-7-right .b-7-btn-inner').hide(0);
                    $('.big-ekran .b-7-bot .right-overlay').show(0);
                    $('.big-ekran .b-7-bot .b-7-right .b-7-btn').css('height', '100%');
                    $('.big-ekran .b-7-bot .b-7-right .b-7-btn').css('width', '100%');
                  },
                  function(){
                    $('.big-ekran .b-7-bot .b-7-btn-info-right').hide(0);
                    $('.big-ekran .b-7-bot .b-7-right .b-7-btn-inner').show(0);
                    $('.big-ekran .b-7-bot .right-overlay').hide(0);
                    $('.big-ekran .b-7-bot .b-7-right .b-7-btn').css('height', 'auto');
                    $('.big-ekran .b-7-bot .b-7-right .b-7-btn').css('width', 'auto');
                  });
                });

            }
            if($(window).width()<768){
              $('.sect-2').removeClass('big-ekran');
              $('.sect-2').addClass('small-ekran');
              $('.sect-7').removeClass('big-ekran');
              $('.sect-7').addClass('small-ekran');
                  $('.small-ekran .b-2-left .b-2-btn').click(function(){
                    $('.small-ekran .b-2-btn-info-left').show(0);
                    $('.small-ekran .b-2-left .b-2-btn-inner').hide(0);
                    $('.small-ekran .b-2-left .left-overlay').show(0);
                    $('.small-ekran .b-2-left .b-2-btn').css('height', '100%');
                    $('.small-ekran .b-2-left .b-2-btn').css('width', '100%');
                    $('.small-ekran .b-2-left .b-2-btn').css('border', '0');
                  });
                  $(document).on('click', function(e) {
                    if (!$(e.target).closest(".b-2-left .b-2-btn-inner").length) {
                      $('.small-ekran .b-2-btn-info-left').hide(0);
                      $('.small-ekran .b-2-left .b-2-btn-inner').show(0);
                      $('.small-ekran .b-2-left .left-overlay').hide(0);
                      $('.small-ekran .b-2-left .b-2-btn').css('height', 'auto');
                      $('.small-ekran .b-2-left .b-2-btn').css('width', 'auto');
                      $('.small-ekran .b-2-left .b-2-btn').css('border', '3px solid #c4c4c4');
                    }
                    e.stopPropagation();
                  });

                  $('.small-ekran .b-2-right .b-2-btn').click(function(){
                    $('.small-ekran .b-2-btn-info-right').show(0);
                    $('.small-ekran .b-2-right .b-2-btn-inner').hide(0);
                    $('.small-ekran .b-2-right .right-overlay').show(0);
                    $('.small-ekran .b-2-right .b-2-btn').css('height', '100%');
                    $('.small-ekran .b-2-right .b-2-btn').css('width', '100%');
                    $('.small-ekran .b-2-right .b-2-btn').css('border', '0');
                  });
                  $(document).on('click', function(e) {
                    if (!$(e.target).closest(".b-2-right .b-2-btn-inner").length) {
                      $('.small-ekran .b-2-btn-info-right').hide(0);
                      $('.small-ekran .b-2-right .b-2-btn-inner').show(0);
                      $('.small-ekran .b-2-right .right-overlay').hide(0);
                      $('.small-ekran .b-2-right .b-2-btn').css('height', 'auto');
                      $('.small-ekran .b-2-right .b-2-btn').css('width', 'auto');
                      $('.small-ekran .b-2-right .b-2-btn').css('border', '3px solid #c4c4c4');
                    }
                    e.stopPropagation();
                  });


                  $('.small-ekran .b-7-top .b-7-left .b-7-btn').click(function(){
                    $('.small-ekran .b-7-top .b-7-btn-info-left').show(0);
                    $('.small-ekran .b-7-top .b-7-left .b-7-btn-inner').hide(0);
                    $('.small-ekran .b-7-top .left-overlay').show(0);
                    $('.small-ekran .b-7-top .b-7-left .b-7-btn').css('height', '100%');
                    $('.small-ekran .b-7-top .b-7-left .b-7-btn').css('width', '100%');
                  });
                  $(document).on('click', function(e) {
                    if (!$(e.target).closest(".b-7-top .b-7-left .b-7-btn-inner").length) {
                      $('.small-ekran .b-7-top .b-7-btn-info-left').hide(0);
                      $('.small-ekran .b-7-top .b-7-left .b-7-btn-inner').show(0);
                      $('.small-ekran .b-7-top .left-overlay').hide(0);
                      $('.small-ekran .b-7-top .b-7-left .b-7-btn').css('height', 'auto');
                      $('.small-ekran .b-7-top .b-7-left .b-7-btn').css('width', 'auto');
                    }
                    e.stopPropagation();
                  });
                  $(document).on('click', function(e) {
                    if (!$(e.target).closest(".b-7-bot .b-7-left .b-7-btn-inner").length) {
                      $('.small-ekran .b-7-bot .b-7-btn-info-left').hide(0);
                      $('.small-ekran .b-7-bot .b-7-left .b-7-btn-inner').show(0);
                      $('.small-ekran .b-7-bot .left-overlay').hide(0);
                      $('.small-ekran .b-7-bot .b-7-left .b-7-btn').css('height', 'auto');
                      $('.small-ekran .b-7-bot .b-7-left .b-7-btn').css('width', 'auto');
                    }
                    e.stopPropagation();
                  });

                  $('.small-ekran .b-7-top .b-7-right .b-7-btn').click(function(){
                    $('.small-ekran .b-7-top .b-7-btn-info-right').show(0);
                    $('.small-ekran .b-7-top .b-7-right .b-7-btn-inner').hide(0);
                    $('.small-ekran .b-7-top .right-overlay').show(0);
                    $('.small-ekran .b-7-top .b-7-right .b-7-btn').css('height', '100%');
                    $('.small-ekran .b-7-top .b-7-right .b-7-btn').css('width', '100%');
                  });
                  $(document).on('click', function(e) {
                    if (!$(e.target).closest(".b-7-top .b-7-right .b-7-btn-inner").length) {
                      $('.small-ekran .b-7-top .b-7-btn-info-right').hide(0);
                      $('.small-ekran .b-7-top .b-7-right .b-7-btn-inner').show(0);
                      $('.small-ekran .b-7-top .right-overlay').hide(0);
                      $('.small-ekran .b-7-top .b-7-right .b-7-btn').css('height', 'auto');
                      $('.small-ekran .b-7-top .b-7-right .b-7-btn').css('width', 'auto');
                    }
                    e.stopPropagation();
                  });
                  $(document).on('click', function(e) {
                    if (!$(e.target).closest(".b-7-bot .b-7-right .b-7-btn-inner").length) {
                      $('.small-ekran .b-7-bot .b-7-btn-info-right').hide(0);
                      $('.small-ekran .b-7-bot .b-7-right .b-7-btn-inner').show(0);
                      $('.small-ekran .b-7-bot .right-overlay').hide(0);
                      $('.small-ekran .b-7-bot .b-7-right .b-7-btn').css('height', 'auto');
                      $('.small-ekran .b-7-bot .b-7-right .b-7-btn').css('width', 'auto');
                    }
                    e.stopPropagation();
                  });

                  $('.small-ekran .b-7-bot .b-7-left .b-7-btn').click(function(){
                    $('.small-ekran .b-7-bot .b-7-btn-info-left').show(0);
                    $('.small-ekran .b-7-bot .b-7-left .b-7-btn-inner').hide(0);
                    $('.small-ekran .b-7-bot .left-overlay').show(0);
                    $('.small-ekran .b-7-bot .b-7-left .b-7-btn').css('height', '100%');
                    $('.small-ekran .b-7-bot .b-7-left .b-7-btn').css('width', '100%');
                  });
                  $(document).on('click', function(e) {
                    if (!$(e.target).closest(".b-7-left .b-7-btn-inner").length) {
                      $('.small-ekran .b-7-bot .b-7-btn-info-left').hide(0);
                      $('.small-ekran .b-7-bot .b-7-left .b-7-btn-inner').show(0);
                      $('.small-ekran .b-7-bot .left-overlay').hide(0);
                      $('.small-ekran .b-7-bot .b-7-left .b-7-btn').css('height', 'auto');
                      $('.small-ekran .b-7-bot .b-7-left .b-7-btn').css('width', 'auto');
                    }
                    e.stopPropagation();
                  });

                  $('.small-ekran .b-7-bot .b-7-right .b-7-btn').click(function(){
                    $('.small-ekran .b-7-bot .b-7-btn-info-right').show(0);
                    $('.small-ekran .b-7-bot .b-7-right .b-7-btn-inner').hide(0);
                    $('.small-ekran .b-7-bot .right-overlay').show(0);
                    $('.small-ekran .b-7-bot .b-7-right .b-7-btn').css('height', '100%');
                    $('.small-ekran .b-7-bot .b-7-right .b-7-btn').css('width', '100%');
                  });
                  $(document).on('click', function(e) {
                    if (!$(e.target).closest(".b-7-right .b-7-btn-inner").length) {
                      $('.small-ekran .b-7-bot .b-7-btn-info-right').hide(0);
                      $('.small-ekran .b-7-bot .b-7-right .b-7-btn-inner').show(0);
                      $('.small-ekran .b-7-bot .right-overlay').hide(0);
                      $('.small-ekran .b-7-bot .b-7-right .b-7-btn').css('height', 'auto');
                      $('.small-ekran .b-7-bot .b-7-right .b-7-btn').css('width', 'auto');
                    }
                    e.stopPropagation();
                  });

            }

        });
        $(window).resize();


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



   $('.slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
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
          ['Нескучный', 'undefined', 'undefined', 'undefined', 'undefined', 55.703516, 37.594008, '/img/marker.png']
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

        var mapOptions2 = {
            center: new google.maps.LatLng(55.743649, 37.577548),

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

        var mapElement2 = document.getElementById('map_canvas2');
        var map2 = new google.maps.Map(mapElement2, mapOptions2);
        var locations2 = [
          ['Нескучный', 'undefined', 'undefined', 'undefined', 'undefined', 55.743649, 37.577548, '/img/marker.png']
        ];
        for (i = 0; i < locations2.length; i++) {
          if (locations2[i][1] =='undefined'){ description ='';} else { description = locations2[i][1];}
          if (locations2[i][2] =='undefined'){ telephone ='';} else { telephone = locations2[i][2];}
          if (locations2[i][3] =='undefined'){ email ='';} else { email = locations2[i][3];}
               if (locations2[i][4] =='undefined'){ web ='';} else { web = locations2[i][4];}
               if (locations2[i][7] =='undefined'){ markericon ='';} else { markericon = locations2[i][7];}
                marker = new google.maps.Marker({
                    icon: markericon,
                    position: new google.maps.LatLng(locations2[i][5], locations2[i][6]),
                    map: map2,
                    title: locations2[i][0],
                    desc: description,
                    tel: telephone,
                    email: email,
                    web: web
                });
          link = '';
        }

}




















});
