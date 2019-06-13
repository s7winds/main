$(document).ready(function() {


	// Карусель
	$(".js-carousel").owlCarousel({
		dots: false,
		nav: true,
		navText: false,
    // autoWidth:true,
    margin:40,
		loop: 1,
		items: 5
		// center: true
	});

	// Карусель
	$(".js-carousel-assortment").owlCarousel({
		dots: false,
		nav: true,
		navText: false,
    // autoWidth:true,
    // margin:40,
		loop: 1,
		items: 4
		// center: true
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

});
