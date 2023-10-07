export function GetInputs(){
    const inputs = {
        firstName: document.getElementById('first_name').value,
        lastName: document.getElementById('last_name').value,
        email: document.getElementById('email').value
    };
    
    return inputs;
}