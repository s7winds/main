(function($) {
        $(document).ready(function(){
           $('#nav').localScroll(800);

	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#intro').parallax("50%", 0.1);
	$('#complect-p').parallax("50%", 0.1);
	$('#tabs-p').parallax("50%", 0.1);
	$('#complect-p').parallax("50%", 0.1);
	$('.p-pr1').parallax("0", 0.3);
	$('.p-pr2').parallax("0", 0.9);
	$('.p-pr3').parallax("0", 0.9);
	$('.p-pr4').parallax("0", 0.9);
	$('.p-pr5').parallax("0", 0.3);

})

        $(window).load(function(){
           $('.landingMenu').liLanding();
       })


    $.organicTabs = function(el, options) {

        var base = this;
        base.$el = $(el);
        base.$nav = base.$el.find(".nav");

        base.init = function() {

            base.options = $.extend({},$.organicTabs.defaultOptions, options);

            // Accessible hiding fix
            $(".hide").css({
                "position": "relative",
                "top": 0,
                "left": 0,
                "display": "none"
            });

            base.$nav.delegate("li > a", "click", function() {

                // Figure out current list via CSS class
                var curList = base.$el.find("a.current").attr("href").substring(1),

                // List moving to
                    $newList = $(this),

                // Figure out ID of new list
                    listID = $newList.attr("href").substring(1),

                // Set outer wrapper height to (static) height of current inner list
                    $allListWrap = base.$el.find(".list-wrap"),
                    curListHeight = $allListWrap.height();
                $allListWrap.height(curListHeight);

                if ((listID != curList) && ( base.$el.find(":animated").length == 0)) {

                    // Fade out current list
                    base.$el.find("#"+curList).fadeOut(base.options.speed, function() {

                        // Fade in new list on callback
                        base.$el.find("#"+listID).fadeIn(base.options.speed);

                        // Adjust outer wrapper to fit new list snuggly
                        var newHeight = base.$el.find("#"+listID).height();
                        $allListWrap.animate({
                            height: newHeight
                        });

                        // Remove highlighting - Add to just-clicked tab
                        base.$el.find(".nav li a").removeClass("current");
                        $newList.addClass("current");

                    });

                }

                // Don't behave like a regular link
                // Stop propegation and bubbling
                return false;
            });

        };
        base.init();
    };

    $.organicTabs.defaultOptions = {
        "speed": 300
    };

    $.fn.organicTabs = function(options) {
        return this.each(function() {
            (new $.organicTabs(this, options));
        });
    };

})(jQuery);
