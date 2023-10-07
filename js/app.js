import { ValidateInputs } from "./modules/validation.js";
import { AccessConfirmation } from "./modules/accessMessage.js";

(function () {
    // const submitButton = document.querySelector('[type="submit"]');
    const registerForm = document.getElementById('register_form');

    function submitForm(event){
        event.preventDefault();
    }
    
    registerForm.addEventListener('submit', submitForm);
    registerForm.addEventListener("submit", () => {
        return ValidateInputs()
    });
})();

// AccessConfirmation();
