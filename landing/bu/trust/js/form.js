$(function() {
    $("#dialog-modal").dialog({
        width: 360,
        show: 'fade',
        draggable: false,
        modal: true,
        resizable: false,
        autoOpen: false
    });
    $(".ui-dialog-titlebar").hide();
    $('.contact-form').submit(function() {
        $("#dialog-modal").dialog("open");
        $.ajax({
            type: "POST",
            url: $(this).attr('action'),
            data: $(this).serialize(),
            success: function() {
                $(".modal_div").remove();
                $("#overlay").remove();
                $("#dialog-modal");
            }
        });
        return false;
    });
});

jQuery(document).ready(function() {
    jQuery("#dialog-modal").dialog({
        autoOpen: false,
        modal: true,
        open: function(){
            jQuery('.ui-widget-overlay').bind('click',function(){
                jQuery('#dialog-modal').dialog('close');
            });
            jQuery('.modal-close').bind('click',function(){
                jQuery('#dialog-modal').dialog('close');
            })
        }
    });
});
