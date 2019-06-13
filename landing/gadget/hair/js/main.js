$(document).ready(function() {

	new WOW().init();

	function giftInit(query) {
		var $gift = $(query);
		$gift.hover(function(){
			$.fancybox( $('#gift-text'), {
				padding: 0,
				fitToView: false,
				helpers: {
					overlay: {
	      		locked: false // отключаем блокировку overlay
	      	}
	      }
	    } );
		});
	}

	// giftInit('.js-gift');

	$("#nav").sticky({topSpacing:0});

// Menu

var menu = $('#nav'), menuButton = $('#js-menu-button');

menuButton.click(function (event) {
	event.preventDefault();
	menu.toggleClass('is-opened');
});

var now = new Date();
var nowDay = now.getDate();
var nowMonth = now.getMonth() + 1;
var nowYear = now.getFullYear();

var $timer = $(".js-timer");

var $days = $timer.find('.js-timer__days');
var $hours = $timer.find('.js-timer__hours');
var $minutes = $timer.find('.js-timer__minutes');
var $seconds = $timer.find('.js-timer__seconds');

$timer.countdown(now.getTime() + 40*60*1000,function(e){

	$days.text(e.strftime('%D'));
	$hours.text(e.strftime('%H'));
	$minutes.text(e.strftime('%M'));
	$seconds.text(e.strftime('%S'));

});


var myTabs = $('.js-tabs');
var myTabsBtn = myTabs.find('.js-tabs__btn');
var myTabsTab = myTabs.find('.js-tabs__tab');
var activeClass = 'is-active';

myTabsBtn.each(function (indx){
	$(this).click(function (event){
		event.preventDefault();

		myTabsBtn.filter('.'+activeClass).removeClass(activeClass);
		$(this).addClass(activeClass);

		myTabsTab.filter('.'+activeClass).removeClass(activeClass);
		myTabsTab.eq(indx).addClass(activeClass);

	});
});


	// Карусель
	$(".js-carousel").owlCarousel({
		dots: true,
		nav: true,
		navText: false,
		loop: 1,
		items: 1
	});

	// Карусель
	$(".js-img-carousel").owlCarousel({
		dots: false,
		nav: true,
		navText: false,
		loop: 1,
		items: 1
	});


	$(".js-scroll").on("click", function (event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();

			//забираем идентификатор бока с атрибута href
			var id  = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

			var $nav = $('#nav');

			$nav.removeClass('is-opened');
			var offset = $nav.outerHeight();


			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({scrollTop: top - offset}, 1500);
		});

	var fbParam = {
		padding: 0,
		fitToView: false,
		helpers: {
			overlay: {
				locked: false // отключаем блокировку overlay
			}
		}
	}


	$('.js-fancybox').fancybox(fbParam);

	// fbParam.fitToView = true;

	// $('.js-fancybox-image').fancybox(fbParam);


	$(".js-form-submit").submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$.fancybox( $('#modal-thanks'), {
				padding: 0,
				fitToView: false,
				helpers: {
					overlay: {
	      		locked: false // отключаем блокировку overlay
	      	}
	      }
	    } );
			setTimeout(function() {
				$.fancybox.close();
			}, 5000);
	    // window.location = "thanks.html";
	  });
		return false;
	});

	$giftBtn = $('.js-gift-open');
	$giftModal = $('#gift-modal');

	$giftBtn.click(function(e) {
		e.preventDefault();

		$giftModal.toggleClass('is-opened');
	});

	$(document).click(function(event) {
		if ( $(event.target).hasClass('js-gift-open') || $(event.target).closest($giftModal).length) return;
		$giftModal.removeClass('is-opened');
		event.stopPropagation();
	});


	$('input[type=tel]').mask('+7 (000) 000 00 00');

});
