$(document).ready(function() {
  const lockModal = $("#lock-modal");
  const loadingCircle = $("#loading-circle");
  const form = $("#ajaxForm");
  var name = document.forms.namedItem("ajaxForm")["name"];
  var message = document.forms.namedItem("ajaxForm")["message"];
  var email = document.forms.namedItem("ajaxForm")["email"];
  var subject = document.forms.namedItem("ajaxForm")["subject"];
  
  if(name = "" && message = "" && email = "" && subject = "") return false;
  else{

  form.on('submit', function(e) {
    e.preventDefault(); //prevent form from submitting
    
    lockModal.css("display", "block");
    loadingCircle.css("display", "block");

    form.children("input").each(function() {
      $(this).attr("readonly", true);
    });
  });
    
  }
  
});
