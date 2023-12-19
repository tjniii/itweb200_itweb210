// script.js

function playGuessingGame(numToGuess, totalGuesses = 10) {
    let promptText = "Enter a number between 1 and 100.";
  
    for (let guesses = 1; guesses <= totalGuesses; guesses++) {
      const userGuess = prompt(promptText);
  
      // Check if the user pressed Cancel
      if (userGuess === null) {
        return 0;
      }
  
      // Validate if the input is a number
      if (isNaN(userGuess) || userGuess.trim() === "") {
        promptText = "Please enter a number.";
        guesses--; // Decrement the guesses as it doesn't count when the input is invalid
      } else {
        const guessNumber = parseInt(userGuess, 10);
  
        // Check if the guess is correct
        if (guessNumber === numToGuess) {
          return guesses;
        }
  
        // Update the prompt text based on the comparison of the guess with the target number
        promptText =
          guessNumber < numToGuess
            ? `${guessNumber} is too small. Guess a larger number.`
            : `${guessNumber} is too large. Guess a smaller number.`;
      }
    }
  
    return 0; // If the user exceeds the total number of guesses, return 0
  }
  
  // Example usage:
  // playGuessingGame(5);
  // playGuessingGame(7, 3);
  