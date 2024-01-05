// Global variables
let playerTurn = true;
let computerMoveTimeout = 0;

// Function to start a new game
function newGame() {
  // Clear computer's move timeout
  clearTimeout(computerMoveTimeout);
  computerMoveTimeout = 0;

  // Loop through game board buttons
  document.querySelectorAll('.board-button').forEach(button => {
    // Set inner HTML to empty string
    button.innerHTML = '';

    // Remove class name and disabled attribute
    button.classList.remove('x', 'o');
    button.disabled = false;
  });

  // Allow player to take a turn
  playerTurn = true;

  // Set turn information paragraph text
  document.getElementById('turn-info').textContent = "Your turn";
}

// Function to handle board button click
function boardButtonClicked(button) {
  // Check if it's the player's turn
  if (playerTurn) {
    // Set button's inner HTML to "X"
    button.innerHTML = 'X';

    // Add the "x" class to the button
    button.classList.add('x');

    // Disable the button
    button.disabled = true;

    // Switch turn to the computer
    switchTurn();
  }
}

// Function to switch turns between player and computer
function switchTurn() {
  // Check for a winner or draw
  const gameStatus = checkForWinner();

  // If more moves are left
  if (!gameStatus) {
    // If switching from player's turn to computer's turn
    if (!playerTurn) {
      // Use setTimeout to simulate computer "thinking"
      computerMoveTimeout = setTimeout(makeComputerMove, 1000);
    }

    // Toggle playerTurn value
    playerTurn = !playerTurn;

    // Set turn information paragraph text
    const turnInfo = document.getElementById('turn-info');
    turnInfo.textContent = playerTurn ? "Your turn" : "Computer's turn";
  } else {
    // Game over
    playerTurn = false;
    const turnInfo = document.getElementById('turn-info');

    // Display game outcome
    if (gameStatus === 'X') {
      turnInfo.textContent = "You win!";
    } else if (gameStatus === 'O') {
      turnInfo.textContent = "Computer wins!";
    } else {
      turnInfo.textContent = "Draw game";
    }
  }
}

// Function for the computer to make a move
function makeComputerMove() {
  // Get all available buttons
  const availableButtons = document.querySelectorAll('.board-button:not([disabled])');

  // Choose a random button
  const randomButton = availableButtons[Math.floor(Math.random() * availableButtons.length)];

  // Set the button's inner HTML to "O"
  randomButton.innerHTML = 'O';

  // Add the "o" class to the button
  randomButton.classList.add('o');

  // Disable the button
  randomButton.disabled = true;

  // Switch turn back to the player
  switchTurn();
}

// Function to check for a winner or draw
function checkForWinner() {
  // Implement your logic for checking the winner or draw
  // Return 'X' if player wins, 'O' if computer wins, 'Draw' for a draw, and false if the game continues
}
