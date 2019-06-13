(function($){
	$.fn.plaxmove = function(options) {

		this.defaults = {
			ratioH: 0.2,
			ratioV: 0.2,
			invertH: false,
			invertV: false,
			reversed: false
		}

		var settings = $.extend({},this.defaults,options),
			layer = $(this),
			center = {
				//x: $('html').width()/2-layer.width()/2,
				//y: $('html').height()/2-layer.height()/2
				x: layer.width()/2,
				y: layer.height()/2
			},
			y0 = layer.offset().top,
			x0 = layer.offset().left;

		if(settings.reversed) {

			if(settings.invertH)
				var eqH = function(e) {
					return x0-(e.pageY - center.y)*settings.ratioH
				}

			else
				var eqH = function(e) {
					return x0+(e.pageY - center.y)*settings.ratioH
				}

			if(settings.invertV)
				var eqW = function(e) {
					return y0-(e.pageX - center.x)*settings.ratioV
				}
			else
				var eqW = function(e) {
					return y0+(e.pageX - center.x)*settings.ratioV
				}

		}

		else {

			if(settings.invertH)
				var eqH = function(e) {
					return x0-(e.pageX - center.x)*settings.ratioH
					//return x0-e.pageX*settings.ratioH
				}

			else
				var eqH = function(e) {
					return x0+(e.pageX - center.x)*settings.ratioH
					//return x0+e.pageX*settings.ratioH
				}

			if(settings.invertV)
				var eqW = function(e) {
					return y0-(e.pageY - center.y)*settings.ratioV
					//return y0-e.pageY*settings.ratioV
				}
			else
				var eqW = function(e) {
					return y0+(e.pageY - center.y)*settings.ratioV
					//return y0+e.pageY*settings.ratioV
				}

		}

		$('html').on('mousemove', function(e) {

				x = eqH(e)/2;
				y = eqW(e)/2;

				$(layer).css({top:y-85,left:x})

		})

	};
})(jQuery);
