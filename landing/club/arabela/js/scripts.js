$(document).ready(function(){

	 $('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true,
	  asNavFor: '.slider-nav',
	  adaptiveHeight: true
	});
	$('.slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  variableWidth: true,
	  dots: false,
	  centerMode: true,
	  focusOnSelect: true
	});



	$('.slider-kuhna').slick({
	  dots: false,
	  infinite: true,
	  speed: 1500,
	  fade: true,
	  cssEase: 'linear'
	});

	$('.slider-kuhna-2').slick({
	  dots: false,
	  infinite: true,
	  speed: 1500,
	  fade: true,
	  cssEase: 'linear'
	});



    google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(54.825786, 56.065031),
            zoom: 16,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            scaleControl: true,
            scrollwheel: true,
            panControl: true,
            streetViewControl: true,
            draggable : true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false,
            },
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        }
        var mapElement = document.getElementById('map_canvas');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
            ['Кафе-бар "Арабэлла"', 'undefined', 'undefined', 'undefined', 'undefined', 54.825786, 56.065031, 'http://agellare.net16.net/arabela/img/marker.png']
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
        link = '';     }
    }


    $(".modalbox").fancybox();
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



});
