$(document).ready(function(){
	 $('.reviews .wrap').jcarousel({
        scroll: 1
    });
	 $(".tabs").organicTabs({
        "speed": 200
    });

	$(window).stellar({
	horizontalScrolling: false});
	$('.popup').click(function(){

		$('.ten').fadeIn();
		$('#popup-callback').fadeIn();
	});
	$('.close, .ten').click(function(){

		$('.ten').fadeOut();
		$('#popup-callback').fadeOut();
	});
	/*плавный скролл меню по блокам*/
$('a[href^="#"]:not([href^="#opt"])').click(function(){
        var idscroll = $(this).attr('href');//получаем значение атрибута href
        $.scrollTo(idscroll, 1000);// перематываем до блока(1000 - это длительность 1 сек.)


        return false;
    });


});

