
function checkGuess() {
    const message = document.getElementById('message');
    const userGuess =document.getElementById('userGuess').value; 
    if (isNaN(userGuess) || userGuess.trim() === "") {
        message.textContent = 'Please enter a valid number';
        message.style.color = 'red';
        return;
    }
    if (userGuess %2==0) {
        message.textContent = 'The number evan';
        message.style.color = 'green';
        return; 
    } 
    else {
        message.textContent = 'The number is odd';
        message.style.color = 'green';
    }
}


