$(function () {
  $(document).on('change','input[type=file]',function(event){
    var file = $(this);
    if(file.val()!='')
    {
      var label = file.next('label');
      label.attr('title',file.val());
      label.find('.name').css('text-transform','none').text(file.val());
    }
  });

  $('#orderModal, #orderModal-bitrix-seo').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var recipient = button.data('whatever');
    var modal = $(this);
    if(typeof recipient!=='undefined') {
      modal.find('#name-order').text(recipient);
      modal.find('[name=title]').val('Р—Р°РєР°Р· '+recipient);
    }
  });

  $('form.ajax').on('submit', '', function (event) {
    var form = $(this);
    event.preventDefault();
    $.ajax({
      url: form.data('validate')+"?isAjax=Y",
      type: 'post',
      dataType: 'json',
      data: form.serialize(),
      beforeSend:function(){
        form.find('.btn').addClass('loading').attr('disabled',true);
      },
      error: function () {
        alert("Р’РѕР·РЅРёРєР»Р° РѕС€РёР±РєР° СЃРµСЂРІРµСЂР°, РїРѕРїСЂРѕР±СѓР№С‚Рµ РїРѕР·Р¶Рµ");
      },
      success: function (res) {
        form.find('.alert').removeClass('alert');
        if (typeof res === 'string') {
          res = JSON.parse(res);
        }
        if (res['VALIDATE'] == 'Y') {
          form.trigger('form.ajax.beforeSubmit');
          if(form.find('[type=file]').length>0 && !(form.find('[type=file]').val()=='' || typeof form.find('[type=file]').val()==='undefined')) {
            form.addClass('success');
            form.off('submit').submit();
          }
          else
          {
            $.ajax({
              url: form.attr('action')+"?isAjax=Y",
              type: 'post',
              dataType: 'json',
              data: form.serialize(),
              error: function () {
                alert("Р’РѕР·РЅРёРєР»Р° РѕС€РёР±РєР° СЃРµСЂРІРµСЂР°, РїРѕРїСЂРѕР±СѓР№С‚Рµ РїРѕР·Р¶Рµ");
              },
              success: function (res) {
                if(form.parents('.modal-dialog').length>0) {
                  form.parents('.modal-dialog').addClass('success');
                }
                else
                {
                  form.addClass('success');
                }
              }
            });
          }
          form.find('.btn').text(form.find('.success-message').text());

        }
        else
        {
          form.find('.btn').removeClass('loading').attr('disabled',false);
          $.each(res['ERRORS'], function (index, value) {
            form.find('[data-sid=' + value + ']').addClass('alert');
          });
          var firstAlert = form.find('.alert:first');
          if(firstAlert.is('input') || firstAlert.is('textarea'))
          {
            firstAlert.focus();
          }
          else {
            firstAlert.find('input').focus();
          }

        }
      }
    });
  });
  $('form.ajax-submit').on('submit', '', function (event) {
    var form = $(this),
      bValid = true;
    event.preventDefault();
    var empty = form.find('.req');
    if(empty.length>0) {
      $.each(empty,function(){
        if(typeof $(this).val() ==='undefined' || $(this).val()=='')
        {
          if(bValid) {
            $(this).focus();
          }
          $(this).addClass('alert');
          bValid = false;
        }
      });
    }
    if(bValid){
      $.ajax({
        url: form.attr('action')+"?isAjax=Y",
        type: 'post',
        dataType: 'html',
        data: form.serialize(),
        beforeSend:function(){
          form.find('.btn').addClass('loading').attr('disabled',true);
        },
        error: function () {
          alert("Р’РѕР·РЅРёРєР»Р° РѕС€РёР±РєР° СЃРµСЂРІРµСЂР°, РїРѕРїСЂРѕР±СѓР№С‚Рµ РїРѕР·Р¶Рµ");
        },
        success: function (res) {
          form.addClass('success');
          form.find('.alert').removeClass('alert');

		  if ($('.success-message').length>0) {
			form.find('.btn').text($('.success-message').text());
          }
        }
      });
    }
  });


  $('.view-more .btn-primary').on('click', function (e) {
    e.preventDefault();
    var $form = $('.view-more');
    var $url = $form.attr('action');
      $.ajax({
        type: "POST",
        url: $url,
        data: $form.serialize(),
        dataType: "html",
        success: function (data) {
          $('.PAGEN_1').val(parseInt($('.PAGEN_1').val())+1);
          $('.list-news .row').append(data);
        }
    });
    return false;
  });


  $('.phone-mask').mask('+7 (999) 999-99-99');
  $(".input-tel").mask("+ 7 (999) 999-99-99");

  $(".demo_modal").click(function() {
	 var edition = $(this).data('edition');
     $("#orderModal-b24-download iframe").attr("src", "http://it-in.ru/ajax/demo.php?type=demo&edition=" + edition);
  });






});
