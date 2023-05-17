let message = ""

let gender1 = document.getElementById('maleBtn')
let gender2 = document.getElementById('femaleBtn')

let namef = document.forms['regisForm']['nameInput'].value
let email = document.forms['regisForm']['emailInput'].value
let number = document.forms['regisForm']['phoneInput'].value
let password = document.forms['regisForm']['passwordInput'].value
let checkBox =  document.forms['regisForm']['checkboxID'] 

function validate(){
    let checkName = valName();
    let checkEmail = valEmail();
    let checkNumber = valNumber();
    let checkGender = valGender();
    let checkPass = valPass();
    let checkCheckBox = valChecked();

    if(checkName){
        message = "Name can only be alphabetic"
    }else if(checkEmail){
        message = "Email format is not valid"
    }else if(checkNumber){
        message = "Phone number can only be numeric"
    }else if(!checkGender){
        message = "Please choose a gender"
    }else if(checkPass){
        message = "Password format is not valid"
    }else if(checkCheckBox){
        message = "Please check the check box"
    }
    
    if(namef.length > 5 
        && email.length > 3  
        && number.length >= 10 
        && (gender1.checked == true 
            || gender2.checked == true )
        && password.length > 10 
        && checkBox.checked === true
        ){
        
        message = ""
    }
}

function valName(){
    let name = document.forms['regisForm']['nameInput'].value
    console.log(name)
    let ctr = 0

    for(let i = 0; i < name.length; i++){
        if((name[i] >= 'a' && name[i] <= 'z') || (name[i] >= 'A' && name[i] <= 'Z')) ctr++
    }

    if(ctr === name.length && name.length !== 0){
        message = ""
        return false
    }else{
        return true
    }
}

function valEmail(){
    let email = document.forms['regisForm']['emailInput'].value
    let emailArr = email.split('@')

    if(emailArr.length != 2){
        return true
    }
    else if(emailArr[0] <= 1){
        checkEmail = true;
        return true
    }else if(emailArr[1] != "gmail.com"){
        return true;
    }
    if(email.length < 5){
        return true
    }
    else{
        message = ""
        return false;
    }
}

function valNumber(){
    let number = document.forms['regisForm']['phoneInput'].value
    console.log(number)
    let ctr = 0

    for(let i = 0; i < number.length; i++){
        if(number[i] >= '0' && number[i] <= '9') ctr++;
    }
    
    console.log(ctr)
    console.log(number.length)

    if(ctr === number.length && number.length !== 0){
        console.log("test")
        message = ""
        return false;
    }else{
        return true;
    }

}

function valGender(){
    if(gender1.checked){
        return true
    }else if(gender2.checked){
        return true
    }
    return false
}

function valPass(){
    let password = document.forms['regisForm']['passwordInput'].value

    if(password.length <= 10){
        return true
    }else{
        message = ""
        return false
    }
}

function valChecked(){
    if(checkBox.checked){
        message = ""
        return false
    }else{
        return true  
    }
}

let forms = document.getElementById("regisForm")

forms.addEventListener('submit', function(e){
    console.log("hello world")
    e.preventDefault()
    validate()
    if(message !== ""){
        alert(message)
    }else{
        alert("Regis succed")
    }
})

function subm(e){
    console.log("hello world")
    e.preventDefault()
    isEmpty()
    if(message == ""){
        valName()
    }
    if(message == ""){
        valEmail
    }
    if(message == ""){
        valEmail()
    }
    if(message == ""){
        valNumber()
    }
    if(message == ""){
        valGender()
    }
    if(message == ""){
        valPass()
    }
    if(message == ""){
        valChecked()
    }
    prompt(message)
}