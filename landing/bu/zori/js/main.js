$(document).ready(function() {


	var
		headerOffset = '50',
		headerEl = $('#js-header'),
		activeClass = 'scrolled';
	$(window).scroll(function() {
		if( $(window).scrollTop() > headerOffset )
			headerEl.addClass(activeClass);
		else
			headerEl.removeClass(activeClass);
	});


	// Карусель
	$(".js-carousel").owlCarousel({
		dots: false,
		nav: true,
		navText: false,
		loop: 1,
		items: 3
	});



  var floors = $('.js-floor');
  var floorBtn1 = $('.js-floor-btn1');
  var floorBtn2 = $('.js-floor-btn2');
  var floorBtn3 = $('.js-floor-btn3');
  var floorBtn4 = $('.js-floor-btn4');

  floorBtn1.click(function() {
      floors.removeClass('active');
      floors.eq(0).addClass('active');
  });
  floorBtn2.click(function() {
      floors.removeClass('active');
      floors.eq(1).addClass('active');
  });
  floorBtn3.click(function() {
      floors.removeClass('active');
      floors.eq(2).addClass('active');
  });
  floorBtn4.click(function() {
      floors.removeClass('active');
      floors.eq(3).addClass('active');
  });



$(".js-scroll").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;

    var offset = headerEl.outerHeight();
      // if(offset > 66) offset = 66;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top - offset}, 1500);
  });

  $('.js-fancybox').fancybox({
    padding: 0,
    fitToView: false,
    helpers: {
      overlay: {
        locked: false // отключаем блокировку overlay
      }
    }
  });

  $(".js-form-callback").submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      // $.fancybox( $('#modal-thanks'), {
      //   padding: 0,
      //   fitToView: false
      // } );
      // setTimeout(function() {
      //   $.fancybox.close();
      // }, 5000);
      window.location = "thanks.html";
    });
    return false;
  });


  ymaps.ready(init);
  var myMap;
  var myPlacemark;
  var mapCoord = [55.059384, 82.912344];
  var mapCoord2 = [55.14799, 82.902901];
  function init(){
    myMap = new ymaps.Map('map', {
      center: [55.107314, 82.94],
      zoom: 12,
      controls: []
    });

    ymaps.route([mapCoord, mapCoord2]).then(
        function (route) {
            myMap.geoObjects.add(route);
        },
        function (error) {
            alert('Возникла ошибка: ' + error.message);
        }
    );

    myPlacemark = new ymaps.Placemark(mapCoord, {}, {
      preset: 'islands#blueDotIcon'
    });
    myMap.geoObjects.add(myPlacemark);
  }



});

