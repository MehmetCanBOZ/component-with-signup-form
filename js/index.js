document.addEventListener('DOMContentLoaded', (event) => {
    var name_value=document.getElementById("name");
var lastname_value=document.getElementById("lastname");
var email_value=document.getElementById("email_");
var password_value=document.getElementById("password_");
document.querySelector("form").addEventListener('submit',function(e){
    e.preventDefault();
    if(name_value.value===''){
        name_value.classList.add("icon_error");
        document.querySelector(".card .form_item:nth-child(1) .error").style.display="block"
    }else{
        name_value.classList.remove("icon_error");
        document.querySelector(".card .form_item:nth-child(1) .error").style.display="none"
    }

    if(lastname_value.value===''){
        lastname_value.classList.add("icon_error");
        document.querySelector(".card .form_item:nth-child(2) .error").style.display="block";
    }else{
        lastname_value.classList.remove("icon_error");
        document.querySelector(".card .form_item:nth-child(2) .error").style.display="none";
    }
    if(!validateEmail(email_value.value)){
        email_value.classList.add("icon_error");
        document.querySelector(".card .form_item:nth-child(3) .error").style.display="block";
    }else{
        email_value.classList.remove("icon_error");
        document.querySelector(".card .form_item:nth-child(3) .error").style.display="none";
    }
    if(password_value.value===''){
        password_value.classList.add("icon_error");
        document.querySelector(".card .form_item:nth-child(4) .error").style.display="block";
    }else{
        password_value.classList.remove("icon_error");
        document.querySelector(".card .form_item:nth-child(4) .error").style.display="none";
    }
    
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
});
