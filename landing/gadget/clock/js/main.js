$(document).ready(function() {


	new WOW().init();


	var r='<span class="b-js-timer__numb b-js-timer__numb--days">%D</span>'+
	'<span class="b-js-timer__numb b-js-timer__numb--hours">%H</span>'+
	'<span class="b-js-timer__numb b-js-timer__numb--minutes">%M</span>'+
	'<span class="b-js-timer__numb b-js-timer__numb--seconds">%S</span>';

	var now = new Date();
	var nowDay = now.getDate();
	var nowMonth = now.getMonth() + 1;
	var nowYear = now.getFullYear();

	// console.log(nowDay);
	// console.log(nowMonth);
	// console.log(nowYear);

	$(".b-js-timer").countdown(nowMonth + "/" + nowDay + "/" + nowYear + " 23:59",function(e){
		$(this).html(e.strftime(r))
	});


	var myTabs = $('.js-tabs');
	var myTabsBtn = myTabs.find('.js-tabs__btn');
	var myTabsTab = myTabs.find('.js-tabs__tab');
	var activeClass = 'active';

	myTabsBtn.each(function (indx){
		$(this).click(function (event){
			event.preventDefault();

			myTabsBtn.filter('.'+activeClass).removeClass(activeClass);
			$(this).addClass(activeClass);

			myTabsTab.filter('.'+activeClass).removeClass(activeClass);
			myTabsTab.eq(indx).addClass(activeClass);

		});
	});


	$(".js-scroll").on("click", function (event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();

			//забираем идентификатор бока с атрибута href
			var id  = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

			// var offset = headerEl.outerHeight();
			// var offset = 0;
				// if(offset > 66) offset = 66;

			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({scrollTop: top}, 1500);
		});


		function headerFix() {

			var headerOffset = '100';
			var headerEl = $('#js-header');
			var activeClass = 'is-scrolled';

			$(window).scroll(function() {
			  if( $(window).scrollTop() > headerOffset )
			    headerEl.addClass(activeClass);
			  else
			    headerEl.removeClass(activeClass);
			});
		};

		headerFix();


	// Карусель
	$(".js-carousel").owlCarousel({
		dots: false,
		nav: true,
		navText: false,
		loop: 1,
		responsive: {
			0: {
				items: 1

			},
			768: {
				items: 2

			}
		}
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


	$(".various").fancybox({
		padding: 0,
		// maxWidth	: 800,
		// maxHeight	: 600,
		fitToView	: true,
		// width		: '60%',
		// height		: '70%',
		// autoSize	: true,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});



	$(".js-form-callback").submit(function(e) {
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
			}, 5000);
			// window.location = "thanks.html";
		});
		return false;
	});


		// Menu

		var menu = $('#js-menu'), menuButton = $('#js-menu-button');

		menuButton.click(function (event) {
			event.preventDefault();
			menu.toggleClass('opened');
		});

		 // $(document).click(function(event) {
	  //   if ( $(event.target).closest(menuButton).length) return;
	  //   menu.removeClass('opened');
	  //   event.stopPropagation();
	  // });

		// END Menu

		// function newMap(idEl, mapCoord) {
		// 	ymaps.ready(init);
		// 	var myMap;
		// 	var myPlacemark;

		// 	function init(){
		// 		myMap = new ymaps.Map(idEl, {
		// 			center: mapCoord,
		// 			zoom: 16,
		// 			controls: []
		// 		});

		// 		myPlacemark = new ymaps.Placemark(mapCoord, {}, {
		// 			preset: 'islands#blueDotIcon'
		// 		});
		// 		myMap.geoObjects.add(myPlacemark);
		// 	}
		// }


		// var mapCoord1 = [55.753724, 37.618738];
		// var mapCoord2 = [59.932408, 30.357361];

		// newMap('map1', mapCoord1);
		// newMap('map2', mapCoord2);

	});
