// Global variables. Initialization
urlRedirectJS = null;
const submitButton = document.getElementById('submit-btn');

$(function() {
    function urlRedirect() {
        $(function(){
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
        });
    }
    
    urlRedirectJS = urlRedirect;

});


// reCAPTCHA Script. Token will not expire until you interact with form
    if (submitButton.disabled){
             submitButton.disable = true;
    }else
            onSubmit();
            urlRedirectJS();
            submitButton.disable = true;
     }
     
  function onSubmit(){
      e.preventDefault();
        grecaptcha.ready(function() {
            document.getElementById('ajaxForm').addEventListener("submit", function(event) {
                  grecaptcha.execute('6Lcro7IZAAAAAG934YEUBJBAKIMKAHuaXy7Dj0xY', {action: 'homepage'}).then(function(token) {
                       document.getElementById('captchaResponse').value = token;
                   });        
            }, false);

        });
  }



