$(document).ready(function() {
  const lockModal = $("#lock-modal");
  const loadingCircle = $("#loading-circle");
  const form = $("#ajaxForm");
  var fields = "#InputName, #InputEmail, #message-text";
  
  function notFilled() {
        var filled = false;
        $(fields).each(function() {
            if ($(this).val() == '') {
                filled = true;
            }
        });
        return filled;
    }
  
  form.on('submit', function(e) {
    
    if (notFilled) return false;
    else{
    e.preventDefault(); //prevent form from submitting
    
    lockModal.css("display", "block");
    loadingCircle.css("display", "block");

    form.children("input").each(function() {
      $(this).attr("readonly", true);
    });
    }
  });
    
  
});
