
function checkemail() {
    const email=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const message= document.getElementById('message');
    const gmail =document.getElementById('userGuess').value; 
    if (email.test(gmail)) {
        message.textContent = 'Please mail is valid';
        message.style.color = 'green';
        return;
    }
    else {
        message.textContent = 'The mail is not valid';
        message.style.color = 'red';
    }
}
