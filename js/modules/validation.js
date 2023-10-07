export function ValidateInputs(){
    const formInputs = {
        firstNameInput: document.getElementById('first_name').value,
        lastNameInput: document.getElementById('last_name').value,
        emailInput: document.getElementById('email').value,
    };

    if(ValidateName(formInputs.firstNameInput)
    && ValidateName(formInputs.lastNameInput)
    && ValidateEmail(formInputs.emailInput)){
        console.log("Validation has been successful");
        return true;
    }
    
    console.log("Validation has failed");
    return false;
}

function ValidateName(name){
    const nameRegex = /^[a-zA-Z\u00C0-\u017F\s'-]+$/;

    if(name.match(nameRegex)) return true;

    return false;
}

function ValidateEmail(email){
    if(email.toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) return true;

    return false;
}