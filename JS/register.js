function validateData() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var address = document.getElementById("address");
    var DateofBirth = document.getElementById("DateofBirth");
    var password = document.getElementById("password");
    var confpassword = document.getElementById("confpassword");
    var agree = document.getElementById("agree");

    var dob = new Date(DateofBirth.value);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    if (age < 18 ) {
        alert("You must be at least 18 years old to register.");
        return;
    }

    if(name.value.length < 3 || name.value.length > 50){
        alert("Username must be atleast 3 chars and max 30 characters");
    }

    else if(!email.value.endsWith("@gmail.com")){
        alert("Email must end with @gmail.com");
    }
    
    else if(address.value.length < 5 || address.value.length > 75){
        alert("Address must be atleast 5 chars and max 75 characters");
    }

    else if(!checkAlphaNum(password.value)) {
        alert("Password must contain alphanumeric characters and at least 6 characters length!");
    }else if(password.value.length < 8){
        alert("Password must contain alphanumeric characters and at least 6 characters length!");
    }
    else if(confpassword.value!=password.value){
        alert("Password must be the same as password!");
    }

    else if(!male.checked && !female.checked){
        alert("Please select your gender");
    }

    else if (!dateOfBirth.value) {
        alert("Please enter your date of birth");
        return;
    }

    else if(!Agreement.checked ){
        alert("Please agree our privacy policy first");
    }else{
        alert("Submit data success!");  
    }
}

function checkAlphaNum(password){
    var isAlpha = false;
    var isNum = false;
    for(let i = 0 ; i < password.length ; i++){
        if(!isNaN(password[i])){
            isNum = true;
        }
        else{ 
            isAlpha = true;
        }
    }
    return isAlpha && isNum;
}