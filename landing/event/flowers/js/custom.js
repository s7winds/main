$(document).ready(function(){

   $('.selectpicker').selectpicker();


    (function(){

        $(window).load(function(){
            var itogPrice = 0;

            itogPrice = +$('.parameter select[name=nameFlowers] option:selected').attr('data-price');
            if(itogPrice != 0) {
                itogPrice *= +$('.parameter select[name=countFlowers] option:selected').val();
                itogPrice += +$('.parameter select[name=styleFlowers] option:selected').attr('data-price');


            }

            $('.itog-price').html(itogPrice);
        });

        $('.selectpicker').bind('change', function(){
            var itogPrice = 0;

            itogPrice = +$('.parameter select[name=nameFlowers] option:selected').attr('data-price');
            if(itogPrice != 0) {
                itogPrice *= +$('.parameter select[name=countFlowers] option:selected').val();
                itogPrice += +$('.parameter select[name=styleFlowers] option:selected').attr('data-price');


            }

            $('.itog-price').html(itogPrice);
        })

    }());

     var comments = $("#comments");

            comments.owlCarousel({
            items : 4,
                navigation: true,
                navigationText : ["",""],
        });


 $(".top-nav-fixed a[href*='#']").mPageScroll2id();

 //pop

 $('.callBack2').click(function(){
	 $('.overlay').fadeIn(300);
	 setTimeout(function(){
		 $('.modal2').fadeIn(200);
	 },300);
	 return false;
 });

  $('.overlay').click(function(){
		$('.modal2').fadeOut(200);
		setTimeout(function(){
			$('.overlay').fadeOut(200);
		},300);
	 return false;
 });

 $('.callBack').click(function(){
	 $('.overlay').fadeIn(300);
	 setTimeout(function(){
		 $('.modal1').fadeIn(200);
	 },300);
	 return false;
 });

  $('.overlay').click(function(){
		$('.modal1').fadeOut(200);
		setTimeout(function(){
			$('.overlay').fadeOut(200);
		},300);
	 return false;
 });

});
