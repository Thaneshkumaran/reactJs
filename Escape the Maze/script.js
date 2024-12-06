// Game variables
const player = document.getElementById('player');
const exit = document.getElementById('exit');
const gameArea = document.getElementById('game');
const status = document.getElementById('status');
const startBtn = document.getElementById('startBtn');
const walls = document.querySelectorAll('.wall');

let playerX = 0;
let playerY = 0;
const step = 20; // Smaller steps for finer movement

// Start the game
function startGame() {
  // Reset player position
  playerX = 0;
  playerY = 0;
  player.style.left = playerX + 'px';
  player.style.top = playerY + 'px';

  // Reset status message
  status.innerText = 'Find the exit!';
  status.style.color = "#333";

  // Enable player movement
  document.addEventListener('keydown', handleKeyPress);
}

// Reset the game and start fresh when Start button is clicked
startBtn.addEventListener('click', startGame);

// Move player within the game area
function movePlayer(x, y) {
  const newX = playerX + x * step;
  const newY = playerY + y * step;

  // Check for collision with walls and boundaries
  if (!checkCollision(newX, newY) && !checkBoundary(newX, newY)) {
    playerX = newX;
    playerY = newY;
    player.style.left = playerX + 'px';
    player.style.top = playerY + 'px';

    checkWin(); // Check if player reached the exit
  }
}

// Check if player has reached the exit
function checkWin() {
  if (playerX === exit.offsetLeft && playerY === exit.offsetTop) {
    status.innerText = 'You Win!';
    status.style.color = "green";
    document.removeEventListener('keydown', handleKeyPress); // Stop further movement
  }
}

// Check if player collides with a wall
function checkCollision(x, y) {
  for (let wall of walls) {
    const wallRect = wall.getBoundingClientRect();
    const playerRect = player.getBoundingClientRect();
    if (
      playerRect.left + x >= wallRect.left &&
      playerRect.right + x <= wallRect.right &&
      playerRect.top + y >= wallRect.top &&
      playerRect.bottom + y <= wallRect.bottom
    ) {
      return true; // Collision detected
    }
  }
  return false;
}

// Check if player is trying to move outside game boundaries
function checkBoundary(x, y) {
  const gameWidth = gameArea.offsetWidth - player.offsetWidth;
  const gameHeight = gameArea.offsetHeight - player.offsetHeight;

  // Check if new position is outside the game area
  if (x < 0 || y < 0 || x > gameWidth || y > gameHeight) {
    return true; // Out of bounds
  }
  return false;
}

// Handle key presses for player movement
function handleKeyPress(event) {
  switch (event.key) {
    case 'ArrowUp':
    case 'w':
      movePlayer(0, -1);
      break;
    case 'ArrowDown':
    case 's':
      movePlayer(0, 1);
      break;
    case 'ArrowLeft':
    case 'a':
      movePlayer(-1, 0);
      break;
    case 'ArrowRight':
    case 'd':
      movePlayer(1, 0);
      break;
  }
}
