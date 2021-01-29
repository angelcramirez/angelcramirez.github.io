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


}); // JQuery end
