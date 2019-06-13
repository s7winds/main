$(document).ready(function(){

    $('.form-phone').mask('+7 (999) 999-99-99');

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
