function validateForm() {
   // let er_el = document.querySelectorAll('.form-error')
   // er_el.forEach(function(el){
   //     el.style.display='none'
   // })

    let name =  document.forms['myForm']['name'].value
    let second_name = document.forms['myForm']['second_name'].value
    let email = document.forms['myForm']['email']. value
    let passwd1 = document.forms['myForm']['passwd1'].value
    let passwd2 = document.forms['myForm']['passwd2'].value ;
    let gender 

    

    
    
    if(!name){
        document.getElementById('name_error').style.display = 'block'
    }
    if(!second_name){
        document.getElementById('second_name_error').style.display = 'block'
    }
    if(!validateEmail(email)){
        document.getElementById('email_error').style.display = 'block'
    }
    if(!email){
        document.getElementById('email_error_not').style.display = 'block'
    }
    if(!passwd1){
        document.getElementById('passwd1_error').style.display = 'block'
    }
    if(!passwd2){
        document.getElementById('passwd2_error').style.display = 'block'
    }
    if (passwd1 != passwd2 && (passwd1 != '' || passwd1 != 'underfiend')) {
        alert('пароли не совпадают')
    }
    gender=fun1();
    if(!gender){
        document.getElementById('gender_error').style.display = 'block'
    }
    
    console.log(name, second_name, email, passwd1, gender)

    let request = new XMLHttpRequest
    request.open('POST', 'server.php')
    request.setRequestHeader("Content-type", "application/json;charset=UTF-8")
    let data = {
        name: name,
        second_name: second_name,
        email: email,
        passwd: passwd1,
        gender: gender

    }
    request.send(JSON.stringify(data))
    request.onreadystatechange = function () {
        if (request.readyState === 4)
            if (request.status === 200) {
                console.log(request.responseText)
            }
    }
    return false;
}
function validateEmail(email){
    let re = /\S+@\S+\.\S+/
    return re.test(email)
}

