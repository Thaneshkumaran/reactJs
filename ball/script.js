// Game variables
const ball = document.getElementById('ball');
const gameArea = document.getElementById('game');
const startBtn = document.getElementById('startBtn');
const status = document.getElementById('status');
const bouncers = document.querySelectorAll('.bouncer');

let ballX = 185;
let ballY = 185;
const step = 10; // Ball movement step size
let gameActive = false;

// Start the game
function startGame() {
  // Reset ball position and status
  ballX = 185;
  ballY = 185;
  ball.style.left = ballX + 'px';
  ball.style.top = ballY + 'px';
  status.innerText = 'Move the ball using arrow keys or WASD!';
  status.style.color = "#333";
  gameActive = true;

  // Enable ball movement
  document.addEventListener('keydown', handleKeyPress);
}

// Start button event listener
startBtn.addEventListener('click', startGame);

// Move the ball within the game area
function moveBall(x, y) {
  if (!gameActive) return;

  const newX = ballX + x * step;
  const newY = ballY + y * step;

  // Check if the new position is within game boundaries
  if (!checkBoundary(newX, newY)) {
    ballX = newX;
    ballY = newY;
    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';

    checkCollision(); // Check for collisions with bouncers
  }
}

// Check if the ball collides with a bouncer
function checkCollision() {
  const ballRect = ball.getBoundingClientRect();

  for (let bouncer of bouncers) {
    const bouncerRect = bouncer.getBoundingClientRect();

    if (
      ballRect.right > bouncerRect.left &&
      ballRect.left < bouncerRect.right &&
      ballRect.bottom > bouncerRect.top &&
      ballRect.top < bouncerRect.bottom
    ) {
      gameOver();
      break;
    }
  }
}

// Check if ball is within game boundaries
function checkBoundary(x, y) {
  const gameWidth = gameArea.offsetWidth - ball.offsetWidth;
  const gameHeight = gameArea.offsetHeight - ball.offsetHeight;

  // Check if the new position is out of bounds
  if (x < 0 || y < 0 || x > gameWidth || y > gameHeight) {
    return true; // Out of bounds
  }
  return false;
}

// Handle key presses for ball movement
function handleKeyPress(event) {
  if (!gameActive) return;

  switch (event.key) {
    case 'ArrowUp':
    case 'w':
      moveBall(0, -1);
      break;
    case 'ArrowDown':
    case 's':
      moveBall(0, 1);
      break;
    case 'ArrowLeft':
    case 'a':
      moveBall(-1, 0);
      break;
    case 'ArrowRight':
    case 'd':
      moveBall(1, 0);
      break;
  }
}

// End the game
function gameOver() {
  gameActive = false;
  status.innerText = 'Game Over! You hit a bouncer!';
  status.style.color = 'red';

  // Disable further movement
  document.removeEventListener('keydown', handleKeyPress);
}
