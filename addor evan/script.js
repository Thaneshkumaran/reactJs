
function checkGuess() {
    const message = document.getElementById('message');
    const userGuess =document.getElementById('userGuess').value; 
    if(userGuess== Number)
    {
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
else{
    message.textContent = 'plasce enter vaild number';
        message.style.color = 'red'
}
}
