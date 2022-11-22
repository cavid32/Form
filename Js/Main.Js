
function validateemail()  
{  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  }  
}  
function formValidation(e) {
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var symbols = /^[a-zA-Z0-9]+$/g;
    var emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    var uName = document.myForm.username.value;
    var uPassword = document.myForm.password.value;
    var epoct = document.myForm.email.value;

    // Username yoxlanmasi
    if (uName.match(upperCaseLetters) && uName.length >= 6)  {
        username.style.border = "1px solid green";
        return true;
    }
    else{
        usernameSubmit.innerText = "username yanlisdir. Minimum 6 simvol olmali ve boyuk herfle baslamalidir"
        return false
    }

    // Password yoxlanmasi
    if(uPassword.match(symbols) && uPassword.length >= 6 && uPassword <= 10){
        uPassword.style.border = "1px solid green";
        return true
    }else{
        passwordSubmit.innerText = "Parol yanlisdir. Minimum 6 maksimum 10 simvol ve en azi 1 reqem olmalidir."
        return false;
    }

    // email yoxlanmasi
    if (epoct.match(emailRegex)) {
        email.style.border = "1px solid green";
        return true;
    }else{
        emailSubmit.innerText = "E-poct adresi yanlisdir. Zehmet olmasa duzgun e-poct adresin yazin. Mes: numune@saytadi.tld"
        return false;
    }
}