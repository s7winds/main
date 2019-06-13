$(document).ready(function() {

  $('.p-layer-2').plaxmove({ratioH:0.5,ratioV:0.3});
  $('.p-layer-4').plaxmove({ratioH:0.05,ratioV:0});

	$('.bg-pr1').parallax("0", 1.3);
	$('.bg-pr2').parallax("0", 0.7);
	$('.bg-pr3').parallax("0", 0.1);
	$('.bg-pr4').parallax("0", 2);

// Buttons repeat animations
	$('.s-about .b-a')
		.waypoint(function(direction) {
			var self = $(this);
			setTimeout(function() {
				repeatAnimation(self, 'wobble');
			}, 3000);
		},{
			offset: '50%'
		});

	$('.layer-6 .btn-animate')
		.waypoint(function(direction) {
			var self = $(this);
			setTimeout(function() {
				//self.removeClass('fadeInRight');
				repeatAnimation(self, 'tada');
			}, 3000);
		},{
			offset: 'bottom-in-view'
		});
// End Buttons repeat animations

	$(".b-a").animated("wobble");

	$(".btn-animate").animated("tada");

	$(".animation-1").animated("fadeInRight", "fadeOutDown");
	$(".animation-2").animated("fadeInRight", "fadeOutDown");
	$(".animation-3").animated("fadeInRight", "fadeOutDown");
	$(".animation-4").animated("fadeInRight", "fadeOutDown");

	/* parallax */
	$('section[data-type="background"]').each(function() {
		var $bgobj = $(this); // создаем объект
		$(window).scroll(function() {
			var yPos = -($(window).scrollTop() / $bgobj.data('speed'));
			var coords = 'center ' + yPos + 'px';
			$bgobj.css({
				backgroundPosition: coords
			});
		});
	});


	/* buutton close jqModal */
	$('.jqmWindow .close-form').click(function() {

		$('.jqmWindow').jqmHide();

	});

	/* jqModal */
	$('button.tobeclient').click(function() {
		$('.jqmWindow.tobeclient').jqm({
			model: true,
			trigger: 'a.showModel'
		});
		$('.jqmWindow.tobeclient').jqmShow();
	});

	$('button.getprice').click(function() {
		$('.jqmWindow.getprice').jqm({
			model: true,
			trigger: 'a.showModel'
		});
		$('.jqmWindow.getprice').jqmShow();
	});

	$('.btn-cat-more').click(function() {
		$('.jqmWindow.our_products').jqm({
			model: true,
			trigger: 'a.showModel'
		});
		$('.jqmWindow.our_products').jqmShow();
	});

	$('button.getpaper').click(function() {
		$('.jqmWindow.getpaper').jqm({
			model: true,
			trigger: 'a.showModel'
		});
		$('.jqmWindow.getpaper').jqmShow();
	});

	/* menu landing */
	$('.main-menu').liLanding();

	/* fancybox */
	$(".fancybox").fancybox({
		prevEffect: 'none',
		nextEffect: 'none',
		closeBtn: false,
		width: 550,
		height: 640,
		scrolling: 'no'
	});

	$(".g-sertifs").fancybox({
		prevEffect: 'none',
		nextEffect: 'none',
		closeBtn: false,
	});

	// numbers
	$(function() {
		$('.wrap-layer-7 ul').waypoint(
			function() {
				$('#col-1').prop('number', 5000).animateNumber({
					number: 10000
				}, 2000);
				$('#col-2').prop('number', 150).animateNumber({
					number: 211
				}, 2500);
				$('#col-3').prop('number', 80).animateNumber({
					number: 102
				}, 2500);
			}
		);
	});
	// scrolling

	$('.top-menu a[href^="#"]').click(function(obj) {

		elClick = $(this).attr('href');
		destination = $(elClick).offset().top;

		var br = matched.browser;

		if (br == 'mozilla')
			$('html').animate({
				scrollTop: destination
			}, 1100);
		else
			$('body').animate({
				scrollTop: destination
			}, 1100);

		obj.preventDefault();
		//return false;
	});

});


function repeatAnimation(elem, className){
		// console.log(elem);
		var timeOut;
		if (elem.hasClass('animated')) {
			elem.removeClass('animated ' + className);
			timeOut = 1;
		} else {
			elem.addClass('animated ' + className);
			timeOut = 10000;
		}
		setTimeout(function() {
			repeatAnimation(elem, className);
		}, timeOut);
	};




var matched, browser;

jQuery.uaMatch = function(ua) {
	ua = ua.toLowerCase();

	var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
		/(webkit)[ \/]([\w.]+)/.exec(ua) ||
		/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
		/(msie) ([\w.]+)/.exec(ua) ||
		ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];

	return {
		browser: match[1] || "",
		version: match[2] || "0"
	};
};

matched = jQuery.uaMatch(navigator.userAgent);
browser = {};

if (matched.browser) {
	browser[matched.browser] = true;
	browser.version = matched.version;
}

// Chrome is Webkit, but Webkit is also Safari.
if (browser.chrome) {
	browser.webkit = true;
} else if (browser.webkit) {
	browser.safari = true;
}

jQuery.browser = browser;
