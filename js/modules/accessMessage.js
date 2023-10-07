export function AccessConfirmation(isCorrect, firstName, lastName){
    const accessMessage = document.getElementById('register_result');
    if(isCorrect){
        ChangeMessageColor(true, accessMessage);
        accessMessage.innerHTML = 'Witaj, ' + firstName + ' ' + lastName + '!';
    }
    else{
        ChangeMessageColor(false, accessMessage);
        accessMessage.innerHTML = 'Nieprawidłowe dane';
    }
}

function ChangeMessageColor(isCorrect, message){
    let messageColor;

    // colors are from css file
    if(isCorrect){
        messageColor = '--succedColor';
    }
    else{
        messageColor = '--denyingColor';
    }

    message.style.color = getComputedStyle(document.documentElement).getPropertyValue(messageColor);
}