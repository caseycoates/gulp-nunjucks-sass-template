(function ($, window, document, undefined) {

  'use strict';

  $(function () {



    $( ".choose-price" ).click(function() {
        var val = $(this).val();
        if(val === 'yearly'){
          $(".pricing-table-yearly").addClass("open");
          $( ".pricing-table" ).removeClass( "open" )
        }else if(val === 'monthly'){
          $(".pricing-table").addClass("open");
          $( ".pricing-table-yearly" ).removeClass( "open" )
          console.log('monthly');
        }
    });
    
    // let addText = document.createTextNode('Free Trial'),
    // trialTxt = document.getElementById("trial");
    // trialTxt.appendChild(addText);

  });

})(jQuery, window, document);
