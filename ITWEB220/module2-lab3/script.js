function playGuessingGame(numToGuess, totalGuesses = 10) {
    let guessesTaken = 0;

    while (guessesTaken < totalGuesses) {
        let userGuess = prompt(`Enter your guess (Attempt ${guessesTaken + 1}):`);

      
        if (userGuess === null) {
            return 0; 
        }

        userGuess = parseInt(userGuess);

        if (userGuess === numToGuess) {
            return guessesTaken + 1; 
        } else {
            alert("Incorrect guess. Try again.");
            guessesTaken++;
        }
    }

    alert(`Sorry, you've run out of guesses. The correct number was ${numToGuess}.`);
    return 0;
}