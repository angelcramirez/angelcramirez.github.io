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


// Display errors when an input field is incorrect

    var createAllErrors = function() {
        var form = $( this ),
            errorList = $( "ul.errorMessages", form );

        var showAllErrorMessages = function() {
            errorList.empty();

            // Find all invalid fields within the form.
            var invalidFields = form.find( ":invalid" ).each( function( index, node ) {

                // Find the field's corresponding label
                var label = $( "label[for=" + node.id + "] "),
                    // Opera incorrectly does not fill the validationMessage property.
                    message = node.validationMessage || 'Invalid value.';

                errorList
                    .show()
                    .append( "<li><span>" + label.html() + "</span> " + message + "</li>" );
            });
        };

        // Support Safari
        form.on( "submit", function( event ) {
            if ( this.checkValidity && !this.checkValidity() ) {
                $( this ).find( ":invalid" ).first().focus();
                event.preventDefault();
            }
        });

        $( "input[type=submit], button:not([type=button])", form )
            .on( "click", showAllErrorMessages);

        $( "input", form ).on( "keypress", function( event ) {
            var type = $( this ).attr( "type" );
            if ( /date|email|month|number|search|tel|text|time|url|week/.test ( type )
              && event.keyCode == 13 ) {
                showAllErrorMessages();
            }
        });
    };
    
    $( "form" ).each( createAllErrors );
