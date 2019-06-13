$(document).ready(function(){
  var mainSlider = $('.bxslider').bxSlider({
      adaptiveHeight: true,
      mode: 'fade'
  });

    $('.slider-control-left').click(function(){
        mainSlider.goToPrevSlide();
        return false;
    });

    $('.slider-control-right').click(function(){
        mainSlider.goToNextSlide();
        return false;
    });


     $(".carousel-small-inner").owlCarousel({

        navigation : true,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        navigationText: ['', '']

    });

    var bigSlider = $(".big-slider");

        bigSlider.owlCarousel({
            items : 6,
            navigation : true,
            navigationText: ['', '']
        });

    $(".comments-list").owlCarousel({
        items : 4,
        navigation : true,
        navigationText: ['', '']

    });

    $(".letters-list").owlCarousel({
        items : 3,
        navigation : true,
        navigationText: ['', ''],
		itemsDesktop : [1225,2]
    });

	$(".tovar-block-list").owlCarousel({
        items : 4,
        navigation : true,
        navigationText: ['', ''],
		itemsDesktop : [1225,2]
    });


    // таймер

function get_timer() {

	var date_new = "March 4,2015 02:00";

	var date_t = new Date(date_new);
	var date = new Date();
	var timer = date_t - date;

	if(date_t > date) {

		var day = parseInt(timer/(60*60*1000*24));
		if(day < 10) {
			day = '0' + day;
		}

		day = day.toString();

		var hour = parseInt(timer/(60*60*1000))%24;

		if(hour < 10) {
			hour = '0' + hour;
		}

		hour = hour.toString();

		var min = parseInt(timer/(1000*60))%60;

		if(min < 10) {
			min = '0' + min;
		}

		min = min.toString();

		var sec = parseInt(timer/1000)%60;

		if(sec < 10) {
			sec = '0' + sec;
		}

		sec = sec.toString();

        $('span.hour').html(hour);
        $('span.minutes').html(min);
        $('span.seconds').html(sec);

	}

}

    setInterval(get_timer, 1000);

    (function(){

        $('.mobile-menu-toggle').click(function(){
            if($('.mobile-menu').css('display') == 'none') {
                $('.mobile-menu').fadeIn(300);
            }

            else {
                $('.mobile-menu').fadeOut(300);
            }
        });

    }());

    (function(){

        $('.mobile-menu a.dropdown-toggle').click(function(){
            if($(this).siblings('.dropdown-menu-wrp').children('.dropdown-menu').css('display') == 'none') {
                $(this).addClass('active');
                $(this).siblings('.dropdown-menu-wrp').children('.dropdown-menu').slideDown();
            }

            else {
                $(this).siblings('.dropdown-menu-wrp').children('.dropdown-menu').slideUp();
                $(this).removeClass('active');
            }

            return false;
        });

    }());

    (function(){

        $('a.order-call, .consult a, .order-service').click(function(){

            $('.overlay').fadeIn(300);
            setTimeout(function(){
                $('.modal').fadeIn(200);
            },300);

            return false;

        });

        $('.overlay, .close-modal').click(function(){

            $('.modal').fadeOut(300);
            setTimeout(function(){
                $('.overlay').fadeOut(200);
            },300);

            return false;

        });

    }());

    // fixed menu

    (function(){

        $(window).bind('load scroll', function(){

            var offsetWindow = $(window).scrollTop();
            var motivationalListOffset = $('.about-us').offset().top;

            if(offsetWindow >= motivationalListOffset) {
                $('.fixed-nav-inner').addClass('fixed');
            }

            else {
                $('.fixed-nav-inner').removeClass('fixed');
            }

        });

        $(window).bind('load scroll', function(){

            var offsetWindow = $(window).scrollTop();
            var motivationalListOffset = $('.about-us').offset().top;


            if(offsetWindow >= motivationalListOffset) {
                $('.logo-and-phone').addClass('fixed-top');
            }

            else {
                $('.logo-and-phone').removeClass('fixed-top');
            }

        });

    }());

    // scroll to id

    $("#10podarkov a[href*='#']").mPageScroll2id();
    $(".mobile-menu a[href*='#']").mPageScroll2id();
    $("nav a[href*='#']").mPageScroll2id();

	//validate

	(function(){

		var form = $('form');
		$(form).submit(function(){

			if($(this).find('input[name=phone]').val() == '') {
				$(this).find('input[name=phone]').addClass('errorVal');
				return false;
			}

			else {
				$(this).find('input[name=phone]').removeClass('errorVal');
			}

		});

	}());


$('.certificate-item').css('display', 'none');

    $('a[href="#tovar1"]').click(function(){
        $('.certificate-item').css('display', 'none');
        $('#tovar1').css('display', 'block');
    });
    $('a[href="#tovar2"]').click(function(){
        $('.certificate-item').css('display', 'none');
        $('#tovar2').css('display', 'block');
    });
    $('a[href="#tovar3"]').click(function(){
        $('.certificate-item').css('display', 'none');
        $('#tovar3').css('display', 'block');
    });
    $('a[href="#tovar4"]').click(function(){
        $('.certificate-item').css('display', 'none');
        $('#tovar4').css('display', 'block');
    });
    $('a[href="#tovar5"]').click(function(){
        $('.certificate-item').css('display', 'none');
        $('#tovar5').css('display', 'block');
    });
    $('a[href="#tovar6"]').click(function(){
        $('.certificate-item').css('display', 'none');
        $('#tovar6').css('display', 'block');
    });
    $('a[href="#tovar7"]').click(function(){
        $('.certificate-item').css('display', 'none');
        $('#tovar7').css('display', 'block');
    });
    $('a[href="#tovar8"]').click(function(){
        $('.certificate-item').css('display', 'none');
        $('#tovar8').css('display', 'block');
    });
    $('a[href="#tovar9"]').click(function(){
        $('.certificate-item').css('display', 'none');
        $('#tovar9').css('display', 'block');
    });
    $('a[href="#tovar10"]').click(function(){
        $('.certificate-item').css('display', 'none');
        $('#tovar10').css('display', 'block');
    });
});
