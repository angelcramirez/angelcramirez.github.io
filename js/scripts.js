jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').delay(200).fadeOut('slow');
    }());

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      });


    // --------------------------------------------------------------------
    // Contact Form
    // --------------------------------------------------------------------
    
    // Disable Submit button until all required fields are filled 
    $(function (){
        $('#submit-btn').attr('disabled', true);
    });

    var fields = "#InputName, #InputEmail, #message-text";

    $(fields).keyup(function() {
        if (allFilled()) {
            $('#submit-btn').removeAttr('disabled');
    } else {
        $('#submit-btn').attr('disabled', 'disabled');
    }
    });

    function allFilled() {
        var filled = true;
        $(fields).each(function() {
            if ($(this).val() == '') {
                filled = false;
            }
        });
        return filled;
    }

   

}); // JQuery end