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
grecaptcha.ready(function() {
    document.getElementById('ajaxForm').addEventListener("submit", function(event) {
        event.preventDefault();

        grecaptcha.execute('6Lcro7IZAAAAAG934YEUBJBAKIMKAHuaXy7Dj0xY', {action: 'homepage'}).then(function(token) {
           document.getElementById('captchaResponse').value = token; 
           urlRedirectJS();
           submitButton.click();
            
           submitButton.disabled = true;

        });        
      }, false);

});



