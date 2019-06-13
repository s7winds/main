$(document).ready(function() {

	new WOW().init();
});

var map;
function initialize() {
	var styles = [
	{
		stylers: [
		{ hue: "#e5e5e5" },
		{ saturation: -100 },
		{ gamma: 1 }
		]
	},{
		featureType: "road",
		elementType: "geometry",
		stylers: [
		{ lightness: 100 },
		{ visibility: "on" }
		]
	},{
		featureType: "road",
		elementType: "labels",
		stylers: [
		{ visibility: "on" },
		]
	}
	];
	var styledMap = new google.maps.StyledMapType(styles,
		{name: "Styled Map"});
	var myLatlng = new google.maps.LatLng(60.698303, 28.749721);
	var mapOptions = {
		zoom: 16,
		zoomControl: false,
		scaleControl: false,
		scrollwheel: false,
		center: myLatlng,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
		}
	};
	var map = new google.maps.Map(document.getElementById('map'),
		mapOptions);

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		icon: "img/place-mark.png"
	});

	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');
}
google.maps.event.addDomListener(window, 'load', initialize);
