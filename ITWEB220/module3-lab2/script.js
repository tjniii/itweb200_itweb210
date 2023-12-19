// script.js

// Create the game object
let game = {
    lives: 3,
    coins: 0,
  
    // Getter for points
    get points() {
      return this.coins * 10;
    },
  
    // Method to subtract 1 from lives if lives is greater than 0
    playerDies() {
      if (this.lives > 0) {
        this.lives--;
      }
    },
  
    // Method to reset lives to 3 and coins to 0
    newGame() {
      this.lives = 3;
      this.coins = 0;
    }
  };
  
  // Test the game object
  console.log("lives =", game.lives);
  console.log("coins =", game.coins);
  console.log("points =", game.points);
  
  // Collect some coins
  game.coins += 2;
  console.log("points =", game.points);
  
  // Player dies
  game.playerDies();
  console.log("lives =", game.lives);
  
  // Player dies again
  game.playerDies();
  console.log("lives =", game.lives);
  
  // Start a new game
  game.newGame();
  console.log("lives =", game.lives);
  console.log("coins =", game.coins);
  

console.log("lives = " + game.lives);    // should be 3
console.log("coins = " + game.coins);    // should be 0
console.log("points = " + game.points);  // should be 0
game.coins = 2;
console.log("points = " + game.points);  // should be 20
game.playerDies();
console.log("lives = " + game.lives);    // should be 2
game.playerDies();
game.playerDies();
game.playerDies();
console.log("lives = " + game.lives);    // should be 0
game.newGame();
console.log("lives = " + game.lives);    // should be 3
console.log("coins = " + game.coins);    // should be 0