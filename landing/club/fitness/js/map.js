$(document).ready(function(){

    google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(55.755654, 37.621485),
            zoom: 13,
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
            scrollwheel: false,
            panControl: true,
            streetViewControl: true,
            draggable : true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        }
        var mapElement = document.getElementById('map_canvas');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
            ['Дмитрий Болтенко1', 'undefined', 'undefined', 'undefined', 'undefined', 55.771859, 37.572685, 'http://agellare.net16.net/fitness/img/marker.png'],
            ['Дмитрий Болтенко2', 'undefined', 'undefined', 'undefined', 'undefined', 55.757165, 37.550483, 'http://agellare.net16.net/fitness/img/marker.png'],
            ['Дмитрий Болтенко3', 'undefined', 'undefined', 'undefined', 'undefined', 55.755564, 37.651793, 'http://agellare.net16.net/fitness/img/marker.png'],
            ['Дмитрий Болтенко4', 'undefined', 'undefined', 'undefined', 'undefined', 55.742187, 37.605336, 'http://agellare.net16.net/fitness/img/marker.png']
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


});
