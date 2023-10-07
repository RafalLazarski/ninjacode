import { ValidateInputs } from "./modules/validation.js";

(function () {
    const registerForm = document.getElementById('register_form');

    function submitForm(event){
        event.preventDefault();
    }
    
    registerForm.addEventListener('submit', submitForm);
    registerForm.addEventListener("submit", () => {
        return ValidateInputs()
    });
})();
