function calcWordFrequencies() {
    // script.js

function calcWordFrequencies() {
    // Get user input using prompt
    const userInput = prompt('Enter a list of words (separated by spaces):');
  
    // Split the input into an array of words
    const words = userInput.split(' ');
  
    // Create a map to store word frequencies
    const wordFrequencies = new Map();
  
    // Count the frequencies of each word
    for (const word of words) {
      // Convert the word to lowercase to make the count case-insensitive
      const lowercaseWord = word.toLowerCase();
  
      // Increment the frequency count for the word
      wordFrequencies.set(lowercaseWord, (wordFrequencies.get(lowercaseWord) || 0) + 1);
    }
  
    // Output word frequencies to the console
    for (const [word, frequency] of wordFrequencies) {
      console.log(`${word} ${frequency}`);
    }
  }
  
  // Call the function to start the word frequency calculation
  calcWordFrequencies();
  
    
  }



