// const person={
//     name:"thanesh",
//     lastName:"r",
//     age:22,
//     fullname: function(){
//         console.log(this.name)
        
//     },
// }
// const{name:firstname,lastName,age}=person
// console.log(firstname,lastName,age)
function showsub() {
    const message = document.getElementById('get');
    const sub = ["Tamil", "English", "Maths", "Science"];
    let subjectsText = ""; // Initialize an empty string

    for (let i = 0; i < sub.length; i++) {
        // Append each subject to the string
        message.innerHTML += (i + 1) + ". " + sub[i] + "<br>";
        message.style.display="block";
    }

    // message.textContent = subjectsText.trim(); // Set the text content
    message.style.color = 'green';
}
// function showsub() {
//     const message = document.getElementById('get');
//     const sub = ["Tamil", "English", "Maths", "Science"];
//     let i = 0; // Start with the first subject
    
//     message.textContent = ""; // Clear any previous content

//     const intervalId = setInterval(() => {
//         if (i < sub.length) {
//             message.textContent += (i + 1) + ". " + sub[i] + "\n";
//             message.style.color = 'green';
//             i++;
//         } else {
//             clearInterval(intervalId); // Stop the interval when all subjects are displayed
//         }
//     }, 1000); // Adjust 1000ms (1 second) delay as desired
// }



// document.getElementById("get").innerHTML=person.age