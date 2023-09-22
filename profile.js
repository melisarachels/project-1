function validateForm(){
    var username = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var address = document.getElementById('address').value;
    var agree = document.getElementById('agree');
    if(username.length < 5){
        alert('username must be at least 5 characters')
    }
    else if(!email.endsWith('@binus.ac.id')){
        alert('email must be a binus email')
    }
    else if(password.length < 5 || password.length > 20){
        alert('password must be 5 - 20 characters')
    }
    else if(address.length < 10 || address.length > 50){
        alert('address must be 10 - 50 characters')
    }
    else if(!agree.checked){
        alert('agreement box must be checked')
    }
    else{
        alert('Register Success!')
    }
}