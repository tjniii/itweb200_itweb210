function validateGuessingNumber(guessNumberString) {
    if (guessNumberString == '' || isNaN(guessNumberString)) 
    {
        alert("Please enter a number.")
        return false
    }
    
    if (isNaN(guessNumberString)) {
        return 0
    }
    return true
}


function playGuessingGame(numToGuess, totalGuesses = 10) {
    let guessNumberString = prompt("Enter a number between 1 and 100")
    validateGuessingNumber(guessNumberString)
    let countGuessNumber = 1
   
    while (countGuessNumber <= totalGuesses) {

        let guessNumber = parseInt(guessNumberString)

        if (numToGuess === guessNumber) {
                return countGuessNumber
        }
        if (guessNumber < numToGuess) {
            guessNumberString = prompt(guessNumber + " is too small. Guess a larger number.")
            
        }

        if (guessNumber > numToGuess) {
            guessNumberString = prompt(guessNumber + " is too large. Guess a smaller number.")
        }

        if (validateGuessingNumber(guessNumberString))
        {
            countGuessNumber++ 
        }
            
        if (countGuessNumber > totalGuesses) 
        {
            return 0
        }
        
    }

}

console.log(playGuessingGame(7, 3))