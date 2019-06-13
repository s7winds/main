$(function(){

    setTimeout(function() {
        $( ".book1" ).animate({
        opacity: 1,
        top: 60
        }, 100, 'easeOutBack');
    }, 200);

    setTimeout(function() {
        $( ".book2" ).animate({
        opacity: 1,
        top: 60
        }, 100, 'easeOutBack');
    }, 300);

    setTimeout(function() {
        $( ".book3" ).animate({
        opacity: 1,
        top: 60
        }, 100, 'easeOutBack');
    }, 400);

    setTimeout(function() {
        $( ".book4" ).animate({
        opacity: 1,
        top: 60
        }, 100, 'easeOutBack');
    }, 500);

    var blockContainer = $('body'); //блок-контейнер, содержащий анимированные элементы
    var offsetTopBlockContainer = blockContainer.offset().top;
    var blockContainerHeight = blockContainer.height();

    //константы
    var scrollTopDocument = $(document).scrollTop();
    var windowHeight = $(window).height();
    var topItem = (scrollTopDocument + windowHeight - offsetTopBlockContainer);

    // Анимации, повешенные на скролл
    $(window).scroll(function() {

        scrollTopDocument = $(document).scrollTop();
        //если расстояние на которое прокрутили (scrollTopDocument) эл-т > расстояния до блока с анимациями (offsetTopBlock)
        // И scrollTopDocument мешьше чем offsetTopBlock плюс высота этого блока с анимациями
        // то мы находимся в блоке с анимациями
        if( scrollTopDocument + windowHeight >= offsetTopBlockContainer && scrollTopDocument < offsetTopBlockContainer + blockContainerHeight ){

            topItem = (scrollTopDocument + windowHeight - offsetTopBlockContainer);  //величина скролла относительно блока-контейнера, содержащего анимации
//                  topItem2 = topItem*0.8*(Math.cos( (scrollTopDocument + windowHeight - offsetTopBlockContainer)/blockContainerHeight ) );  //анимация с косинусом (к-т задавать маленький)
//                  topItem3 = topItem*4*(Math.sin( (scrollTopDocument + windowHeight - offsetTopBlockContainer)/blockContainerHeight ) );  //анимация с синусом (к-т задавать большой)


            //текст 1
            var delayItem1 = 980; // к-т задержки анимации
            if (topItem >= delayItem1 ) {

                $( ".salon-block2 .text" ).animate({
                    opacity: 1,
                    left: 37
                }, 1000, 'easeOutBack');
            }

            //шампанское
            var delayItem2 = 980; // к-т задержки анимации
            if (topItem >= delayItem2 ) {

                $( ".salon-block2 .salon_img3" ).animate({
                    opacity: 1,
                    right: 43
                }, 1000, 'easeOutBack');
            }

            //картинка с капчой
            var delayItem3 = 1450; // к-т задержки анимации
            if (topItem >= delayItem3 ) {

                $( ".salon-block3 .salon_img4" ).animate({
                    opacity: 1,
                    left: -42
                }, 1000, 'easeOutBack');
            }

            //текст 2
            var delayItem4 = 1450; // к-т задержки анимации
            if (topItem >= delayItem4 ) {

                $( ".salon-block3 .text" ).animate({
                    opacity: 1,
                    right: 44
                }, 1000, 'easeOutBack');
            }

            //кольца
            var delayItem5 = 1450; // к-т задержки анимации
            if (topItem >= delayItem5 ) {
                $( ".salon-block3 .salon_img5" ).animate({
                    opacity: 1,
                    width: 300,
                    height: 299
                }, 800);
            }

            //торт
            var delayItem6 = 2088; // к-т задержки анимации
            if (topItem >= delayItem6 ) {

                $( ".salon-block4 .salon_img6" ).animate({
                    opacity: 1,
                    left: -199
                }, 1000, 'easeOutBack');
            }

            //текст 3
            var delayItem7 = 2088; // к-т задержки анимации
            if (topItem >= delayItem7 ) {

                $( ".salon-block4 .text" ).animate({
                    opacity: 1,
                    right: 18
                }, 1000, 'easeOutBack');
            }


        }
    });

});
