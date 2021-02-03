$(document).ready(function() {
  const lockModal = $("#lock-modal");
  const loadingCircle = $("#loading-circle");
  const form = $("#ajaxForm");
  
  form.on('submit', function(e) {
    e.preventDefault(); //prevent form from submitting
    
    lockModal.css("display", "block");
    loadingCircle.css("display", "block");

    form.children("input").each(function() {
      $(this).attr("readonly", true);
    });
  });
  
});
