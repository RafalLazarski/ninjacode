import { ValidateInputs } from "./modules/validation.js";

(function () {
    const registerForm = document.getElementById('register_form');

    function submitForm(event){
        event.preventDefault();
        return ValidateInputs();
    }
    
    registerForm.addEventListener('submit', submitForm);
})();
