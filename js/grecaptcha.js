// Global variables. Initialization
urlRedirectJS = null;
submitLoadingJS = null;
const submitButton = document.getElementById('submit-btn');
const lockModal = $("#lock-modal");
const loadingLink = $("#loading-link");
const form = $("#ajaxForm");
var fields = "#InputName, #InputEmail, #message-text";
  

$(document).ready(function() {
    function submitLoading() {
    $(function(){
    if($("#submit-btn").hasClass('disabled')) return false;
    else{
    form.on('submit', function(e) {
    e.preventDefault(); //prevent form from submitting
    
    lockModal.css("display", "block");
    loadingLink.css("display", "block");

    form.children("input").each(function() {
      $(this).attr("readonly", true);
    });
    
    });
    }
    });
  }

    function urlRedirect() {
        $(function(){
            if($("#submit-btn").hasClass('disabled')) return false;
            else {
                $("#ajaxForm").submit(function(e){
                e.preventDefault();
                var href = $(this).attr("action");
                $.ajax({
                    type: "POST",
                    dataType: "json",
                    url: href,
                    data: $(this).serialize(),
                    success: function(response){
                        if(response.status == "success"){
                            window.location.href = 'https://angelcramirez.github.io/thank-you.html'; // change this. 
                        }else{
                            alert("An error occured: " + response.message);
                        }
                    }
                  });
               });
                $("#submit-btn").click();
                $("#submit-btn").attr('disabled','disabled');
              
            }
        });
    }
    
    urlRedirectJS = urlRedirect;
    submitLoadingJS = submitLoading;
});

// reCAPTCHA Script. Token will not expire until you interact with form
grecaptcha.ready(function() {
    document.getElementById('ajaxForm').addEventListener("submit", function(event) {
        event.preventDefault();

        grecaptcha.execute('6Lcro7IZAAAAAG934YEUBJBAKIMKAHuaXy7Dj0xY', {action: 'homepage'}).then(function(token) {
           document.getElementById('captchaResponse').value = token;
               submitLoadingJS();
               urlRedirectJS();
                  
        });        
      }, false);
});
