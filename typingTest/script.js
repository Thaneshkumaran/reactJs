// Array of words for the typing test
const words = [
    "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", 
    "elit", "tempor", "incididunt", "labore", "dolore", "magna", "aliqua"
];

let timeLeft = 20;
let timer;
let isGameRunning = false;
let currentWordIndex = 0;
let correctWordCount = 0;
let totalTypedWords = 0;

const startButton = document.getElementById("startButton");
const typingArea = document.getElementById("typingArea");
const timeDisplay = document.getElementById("timeLeft");
const resultDisplay = document.getElementById("result");
const textDisplay = document.getElementById("textToType");

startButton.addEventListener("click", startGame);
typingArea.addEventListener("input", checkTyping);

function startGame() {
    if (isGameRunning) return;
    isGameRunning = true;
    timeLeft = 20;
    typingArea.value = "";
    resultDisplay.textContent = "";
    correctWordCount = 0;
    totalTypedWords = 0;  // Reset the typed word count
    currentWordIndex = 0;
    startButton.disabled = true;

    // Display the first word with span tags around each letter
    textDisplay.innerHTML = words[currentWordIndex].split('').map(char => `<span>${char}</span>`).join('');

    typingArea.disabled = false;
    typingArea.focus();

    // Start the timer
    timer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function checkTyping() {
    const typedText = typingArea.value;
    const targetText = textDisplay.querySelectorAll("span");

    // Reset colors for each character
    targetText.forEach((span, index) => {
        span.classList.remove("correct", "incorrect");
    });

    // Check each character and apply the correct or incorrect class
    for (let i = 0; i < typedText.length; i++) {
        if (i >= targetText.length) break;

        if (typedText[i] === targetText[i].textContent) {
            targetText[i].classList.add("correct");
        } else {
            targetText[i].classList.add("incorrect");
        }
    }

    // If the typed word is correct, move to the next word
    if (typedText === words[currentWordIndex]) {
        correctWordCount++;
        totalTypedWords++;  // Increment the total typed word count
        currentWordIndex++;

        // If there are more words, show the next word
        if (currentWordIndex < words.length) {
            textDisplay.innerHTML = words[currentWordIndex].split('').map(char => `<span>${char}</span>`).join('');
            typingArea.value = "";  // Clear input for the next word
        } else {
            endGame();  // End the game when all words are typed correctly
        }
    }
}

function endGame() {
    clearInterval(timer);
    isGameRunning = false;
    typingArea.disabled = true;
    startButton.disabled = false;

    // Calculate accuracy
    const accuracy = (correctWordCount / words.length) * 100;
    resultDisplay.textContent = `Words Typed: ${totalTypedWords}, Accuracy: ${Math.round(accuracy)}%`;
}
