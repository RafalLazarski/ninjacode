import { GetInputs } from "./Inputs.js";
import { AccessConfirmation } from "./accessMessage.js"

// function needs 3 html inputs
export function ValidateInputs(){
    const formInputs = GetInputs();
    if(ValidateName(formInputs.firstName)
    && ValidateName(formInputs.lastName)
    && ValidateEmail(formInputs.email)){
        return AccessConfirmation(true, formInputs.firstName, formInputs.lastName);
    }
    
    return AccessConfirmation(false);
}

// function needs input html
function ValidateName(name){
    // regex for name (or names)
    // if someone have two names
    // also include characters like "'", "'"
    // and needs at least two letters (f.e. "Ed")
    const nameRegex = /^[a-zA-Z\u00C0-\u017F\s'-]{2,}$/;

    if(name.match(nameRegex)) return true;

    return false;
}

// function needs input html
function ValidateEmail(email){
    if(email.toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) return true;
    
    return false;
}