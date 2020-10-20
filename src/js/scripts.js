(function ($, window, document, undefined) {

  'use strict';
  $(function () {
    const $radioToggle = $('[data-radio-toggle]');
    const selector = $radioToggle.data('radioToggle');
    const $radioToggled = $(selector);
    if ($radioToggled.length !== 0) {
      const $radio = $radioToggle.find('[data-toggle]');
      $radio.on('checked', function() {
        const radioSelection = $(this).data('toggle');
        const $section = $radioToggled.find(radioSelection);
        $section.removeClass('d-none');
        $radio.forEach(element => {
          if (element.prop('checked') !== TRUE) {
            const $section = $radioToggled.find(element.data('toggle'));
            $section.addClass('d-none');
          }
        });
      });
    }
  });

})(jQuery, window, document);
