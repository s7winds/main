
$(function () {
  $('.filter').on('click', '.item', function (event) {
    event.preventDefault();
    var item = $(this),
      filterType = item.parents('.filter').attr('id'),
      filterValue = item.data('value'),
      form = $('form.view-more'),
      tabContent = form.parent(),
      maxPage = parseInt(tabContent.find('[name="page_max"]').val());

    form.find('[name="filter_' + filterType + '"]').val(filterValue);
    form.find('[name="PAGEN_1"]').val('1');

    $.ajax({
      url: '/ajax/pager/section.php?ajax=Y&clear_cache=Y',
      dataType: 'html',
      data: form.serialize(),
      error: function () {
        alert("Р’РѕР·РЅРёРєР»Р° РѕС€РёР±РєР° СЃРµСЂРІРµСЂР°, РїРѕРїСЂРѕР±СѓР№С‚Рµ РїРѕР·Р¶Рµ");
      },
      beforeSend: function () {
        item.addClass('active').siblings().removeClass('active');
        item.addClass('loading');
        $('.filter').attr('disabled', true);
      },
      success: function (res) {
        if (typeof res === 'string') {
          tabContent.find('.item').parent().remove();
          form.remove();
          tabContent.prepend(res);
          $('.filter').attr('disabled', false);
          item.removeClass('loading');
          //form.find('[name="PAGEN_1"]').val('2');
        }
        else {
          alert("Р’РѕР·РЅРёРєР»Р° РѕС€РёР±РєР°: РїСѓСЃС‚РѕР№ РѕС‚РІРµС‚. РџРѕРїСЂРѕР±СѓР№С‚Рµ РїРѕР·Р¶Рµ");
        }
      }
    });
  });
});
