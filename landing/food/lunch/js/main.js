$(document).ready(function(){
    $(window).scroll(function(){
        parallax();
    });
    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.pr1').css('top',(400-(scrolled*.2))+'px');
        $('.pr2').css('top',(550-(scrolled*.3))+'px');

        $('.pr3').css('top',(1750-(scrolled*.2))+'px');
        $('.pr4').css('top',(2000-(scrolled*.3))+'px');

        $('.pr5').css('top',(1200-(scrolled*.2))+'px');
        $('.pr6').css('top',(1450-(scrolled*.3))+'px');

        $('.pr7').css('top',(1700-(scrolled*.3))+'px');

        $('.pr8').css('top',(750-(scrolled*.2))+'px');
        $('.pr9').css('top',(1450-(scrolled*.3))+'px');

        $('.pr10').css('top',(800-(scrolled*.2))+'px');
        $('.pr11').css('top',(1600-(scrolled*.3))+'px');
    }
});


$(document).ready(function(){
    $("nav").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


$(document).ready(function () {
    $("form").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                $(formNm).html(data);
                $('#ThankModal').modal('show');
                $('#myModal').modal('hide');
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html(error);
            }
        });
        return false;
    });
});


