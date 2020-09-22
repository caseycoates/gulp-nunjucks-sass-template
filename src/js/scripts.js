(function ($, window, document, undefined) {

  'use strict';


  $(function () {
    $('input[name=payment]').on('change', function() {
      $('input[name=payment]').removeAttr('checked', 'checked');
      $(this).attr('checked', 'checked');
      if($(this).val() === 'monthly') {
        $('#monthly-pricing').show();
        $('#yearly-pricing').hide();
        $('input[name="monthly"]').prop("checked", true);
      } else {
        $('#monthly-pricing').hide();
        $('#yearly-pricing').show();
        $('input[name="yearly"]').prop("checked", true);
      }
    });

    $('.accordion-top').on('click', function() {
      if($(this).siblings('.accordion-body').hasClass('open')) {
        $(this).siblings('.accordion-body').removeClass('open');
        $('.accordion-top').removeClass('rotate');
      } else {
        $('.accordion-body').removeClass('open');
        $(this).siblings('.accordion-body').addClass('open');
        $(this).addClass('rotate');
      }
    });
  });

})(jQuery, window, document);
