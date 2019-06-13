$(document).ready(function(){


	$(".show").click(function(){
	  $(".not-show").toggleClass("yes-show");
	});

	$(".map-hidden").click(function(){
	  $("#map_canvas").toggleClass("not-visible");

	});



    $('.slider-trener').slick({
      dots: false,
      speed: 300,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
	    {
	      breakpoint: 575,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 410,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    }
	  ]
    });

    $('.slider-trener-search').slick({
      dots: false,
      speed: 300,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 550,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 410,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    }
	  ]
    });



    $('.slider-trener-2').slick({
      dots: false,
      speed: 300,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
    });

    $(".modalbox").fancybox();



        $("#range").ionRangeSlider({
            hide_min_max: true,
            keyboard: true,
            min: 0,
            max: 5000,
            from: 1000,
            to: 4000,
            type: 'double',
            step: 1,
            prefix: "$",
            grid: true
        });
var $range = $("#range_47");

$range.ionRangeSlider({
    type: "single",
    min: 0,
    max: 10,
    from: 5,
    step: 0.1,
    hide_min_max: true,
    hide_from_to: true
});

$range.on("change", function () {
    var $this = $(this),
        value = $this.prop("value");

    console.log("Value: " + value);
    $( "#result_47" ).html( value );
});





});
