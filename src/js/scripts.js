(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    $('input[name=payment]').on('change', function() {
      $('input[name=payment]').removeAttr('checked', 'checked');
      $(this).attr('checked', 'checked');
      console.log($(this).val());
      console.log(this);
      if($(this).val() === 'monthly') {
        console.log('monthly');
        $('#monthly-pricing').show();
        $('#yearly-pricing').hide();
        $('input[name="monthly"]').prop("checked", true);
      } else {
        console.log('yearly');
        $('#monthly-pricing').hide();
        $('#yearly-pricing').show();
        $('input[name="yearly"]').prop("checked", true);
      }
    });
  });

})(jQuery, window, document);
