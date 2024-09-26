function ValidateData(){
    var validated = true
    
    var name = document.getElementById("name").value
    var errname = document.getElementById("err-name")
    if(name==""){
        errname.innerHTML = "Name cannot be empty"
        validated = false;
    }else{
        errname.innerHTML = ''
    }

    var phone = document.getElementById("phone").value
    var errphonenumber = document.getElementById("err-phone")
    if(phone==""){
        errphonenumber.innerHTML = "Phone Number cannot be empty"
        validated = false;
    }else{
        errphonenumber.innerHTML = ''
    }

    var email = document.getElementById("email").value
    var errEmail = document.getElementById("err-email")
    if(email==""){
        errEmail.innerHTML = "Email cannot be empty";
        validated = false;
    } else if(email.startsWith('@') || email.endsWith('@')){
        errEmail.innerHTML = "Email can't start or end with '@'"
        validated = false
    } else if(email.startsWith('.') || email.endsWith('.')){
        errEmail.innerHTML = "Email can't start or end with '.'"
        validated = false
    } else if(email.indexOf("@.") > -1 || email.indexOf('.@') > -1){
        errEmail.innerHTML = "'@' and '.' cannot be side by side"
        validated = false
    } else if(!email.includes("@")){
        errEmail.innerHTML = "Must contain '@'"
        validated = false
    } else if(!(email.endsWith(".com") || email.endsWith(".co.id"))){
        errEmail.innerHTML = "Must end with '.com' or '.co.id'"
        validated = false
    } else{
        errEmail.innerHTML = ''
    }

    var country = document.getElementById('country');
    var errcountry = document.getElementById("err-country")
    if (country.value == '') {
        errcountry.innerHTML = "You must choose a country"
        validated = false
    }else{
        errcountry.innerHTML = ''
        return true;
    }

    var term = document.getElementById("term")
    var errterm = document.getElementById("err-term")
    if(term.checked == false){
        errterm.innerHTML = "You must subsribe to send us messages"
        validated = false
    }else{
        errterm.innerHTML = ''
    }

    if(validated){
        alert('Submited')
    } else{
        alert('Failed')
    }
}

