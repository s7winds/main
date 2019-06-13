/**
 * Created by Aleksandr Terentev <alvteren@gmail.com> on 27.10.15.
 */
$(function(){
  function appendOrder(form) {
    var $calc = $('#left-side [data-sub-section-id]');
    $.each($calc,function(){
      var sectionData = $(this).calc('getData');
      if(!!sectionData && sectionData.items.length>0) {
        var sectionItems = [];
        var key = sectionData.subSectionId;
        key = 'section['+key+'][]';
        $.each(sectionData.items,function(){
          form.append('<input type="hidden" name="'+key+'" value="'+this.id+'">');
        });
      }
    });

  }
	//Block clicking on first parent elements
  $(".header .main .parent").find("a:first").attr("href","javascript:void(0);");

  $('#orderModal form').on('form.ajax.beforeSubmit',function(event){
    var form = $(this);
    appendOrder(form);
    if(form.find('[name="title"]').length<=0) {
      form.append('<input type="hidden" name="title" value="Р—Р°РєР°Р·">');
    }
    else {
      form.find('[name="title"]').val('Р—Р°РєР°Р·')
    }
  });
  $('.pdf').on('click',function(event){
    event.preventDefault();
    $('body').append('<form id="pdf" target="_blank" action="/ajax/pdf/" method="post"></form>');
    var form = $('#pdf');
      appendOrder(form);
    if(form.find('[name="title"]').length<=0) {
      form.append('<input type="hidden" name="title" value="РљРѕРјРјРµСЂС‡РµСЃРєРѕРµ РїСЂРµРґР»РѕР¶РµРЅРёРµ">');
    }
    else {
      form.find('[name="title"]').val('РљРѕРјРјРµСЂС‡РµСЃРєРѕРµ РїСЂРµРґР»РѕР¶РµРЅРёРµ')
    }

    form.submit();
  });
  $('.printed').on('click',function(event){
    event.preventDefault();
    $('body').append('<form id="print" target="_blank" action="/print/" method="post"></form>');
    var form = $('#print');
    appendOrder(form);
    if(form.find('[name="title"]').length<=0) {
      form.append('<input type="hidden" name="title" value="РљРѕРјРјРµСЂС‡РµСЃРєРѕРµ РїСЂРµРґР»РѕР¶РµРЅРёРµ">');
    }
    else {
      form.find('[name="title"]').val('РљРѕРјРјРµСЂС‡РµСЃРєРѕРµ РїСЂРµРґР»РѕР¶РµРЅРёРµ')
    }
    form.submit();
  });
});
