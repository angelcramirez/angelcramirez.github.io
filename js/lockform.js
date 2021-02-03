$(document).ready(function() {
  const lockModal = $("#lock-modal");
  const loadingCircle = $("#loading-circle");
  const form = $("#ajaxForm");
  var name = document.forms[0]["name"];
  var message = document.forms[0]["message"];
  var email = document.forms[0]["email"];
  var subject = document.forms[0]["subject"];
  
  if(name = "" && message = "" && email = "" && subject = "") console.log(name);
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
