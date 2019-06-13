$(document).ready(function() {


    new ScrollFlow();




    <!-- Placeholder для input -->

    $('input').each(function() {
        if ($(this).val() !== '') {
            $(this).addClass('non-empty');
        }
    });
    $('input').on('focus', function() {
        $(this).addClass('non-empty');
    });
    $('input').on('blur', function() {
        if ($(this).val() == '') {
            $(this).removeClass('non-empty');
        }
    });


    <!-- Шедевральные табы -->
	/*
    $(".step1").click(function() {
        $(".steps > div").slideUp("slow");
        $(".steps_link h3").removeClass("active");
        $("#step1").slideToggle("slow");
        $(this).addClass("active");
    });
    $(".step2").click(function() {
        $(".steps > div").slideUp("slow");
        $(".steps_link h3").removeClass("active");
        $("#step2").slideToggle("slow");
        $(this).addClass("active");
    });
    $(".step3").click(function() {
        $(".steps > div").slideUp("slow");
        $(".steps_link h3").removeClass("active");
        $("#step3").slideToggle("slow");
        $(this).addClass("active");
    });
	$(".step3_2").click(function() {
        $(".steps > div").slideUp("slow");
        $(".steps_link h3").removeClass("active");
        $("#step3_2").slideToggle("slow");
        $(this).addClass("active");
    });
    $(".step4").click(function() {
        $(".steps > div").slideUp("slow");
        $(".steps_link h3").removeClass("active");
        $("#step4").slideToggle("slow");
        $(this).addClass("active");
    });




    $(".go_step2").click(function() {
        $(".steps > div").slideUp("slow");
        $(".steps_link h3").removeClass("active");
        $("#step2").slideToggle("slow");
        $(".step2").addClass("active");
    });

    $(".go_step3").click(function() {
        $(".steps > div").slideUp("slow");
        $(".steps_link h3").removeClass("active");
        $("#step3").slideToggle("slow");
        $(".step3").addClass("active");
    });

	$(".go_step3_2").click(function() {
        $(".steps > div").slideUp("slow");
        $(".steps_link h3").removeClass("active");
        $("#step3_2").slideToggle("slow");
        $(".step3_2").addClass("active");
    });

    $(".go_step4").click(function() {
        $(".steps > div").slideUp("slow");
        $(".steps_link h3").removeClass("active");
        $("#step4").slideToggle("slow");
        $(".step4").addClass("active");
    });
	*/
    <!-- Выбор оплаты -->


    $("#tabs").tabs();


    <!-- Слайдер на оформление -->

    // Can also be used with $(document).ready()

    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        smoothHeight: false,
        slideshow: false,
    });


    <!-- Выбор модели -->


    $('.vibor > div').on('click', function() {

        $('.vibor > div').removeClass('active');
        $(this).addClass('active');

        $(".nabor > div").removeClass("display");
        $(".nabor > div").eq($(this).index()).addClass("display");

        $(".flexslider").resize();

    });

    <!-- Кнопка завершения -->

    $(".finish_him").on("click", function() {
        $("#tabs").fadeToggle();
        $(".message").fadeToggle();

    });

    <!-- Боковой слайдер -->

    $(".fp-prev").on("mouseenter", function() {
        $(".nazad").css("left", "150px");
    });
    $(".fp-prev").on("mouseout", function() {
        $(".nazad").css("left", "45px");
    });

    $(".fp-next").on("mouseenter", function() {
        $(".vpered").css("right", "150px");
    });
    $(".fp-next").on("mouseout", function() {
        $(".vpered").css("right", "45px");
    });


    $(".vibor .phone-thumb").on("click", function() {
        $(".vibor .phone-thumb").removeClass("checked");
        $(this).addClass("checked");
    });

});
