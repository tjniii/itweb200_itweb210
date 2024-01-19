// Size of a single snowflake
const flakeSize = 8;

window.addEventListener("DOMContentLoaded", function() {
   let canvas = document.querySelector("canvas");
   
   drawGround(canvas);
   drawSnowText(canvas);
   drawSnowman(canvas);  
   drawSnowflakes(canvas);   
});

function drawGround(canvas) {
   let context = canvas.getContext("2d");

   // background 
   context.fillStyle = "lightgray";
   context.fillRect(0, 0, 300, 300);

   // ground
   context.fillStyle = "brown";
   context.fillRect(0, canvas.height - 50, canvas.width, canvas.height);
}

function drawSnowflakes(canvas) {   
   for (let c = 0; c < 100; c++) {
      let x = Math.floor(Math.random() * canvas.width);
      let y = Math.floor(Math.random() * canvas.height);
      drawSingleFlake(canvas, x, y);
   }
}

// Complete the functions below

document.addEventListener('DOMContentLoaded', function () {
   const canvas = document.getElementById("canvas");
   const ctx = canvas.getContext("2d");

   function drawGround() {
       // Display brown ground
       ctx.fillStyle = "brown";
       ctx.fillRect(0, canvas.height - 30, canvas.width, 30);

       // Display light gray sky
       ctx.fillStyle = "lightgray";
       ctx.fillRect(0, 0, canvas.width, canvas.height - 30);
   }

   function drawSnowText() {
       ctx.font = "80px Verdana";
       ctx.textAlign = "center";
       ctx.textBaseline = "top";
       ctx.fillStyle = "blue";
       ctx.fillText("SNOW", canvas.width / 2, 10);
   }

   function drawSnowman() {
       // Bottom circle
       ctx.beginPath();
       ctx.arc(150, 200, 50, 0, Math.PI * 2);
       ctx.fillStyle = "white";
       ctx.fill();

       // Middle circle
       ctx.beginPath();
       ctx.arc(150, 120, 40, 0, Math.PI * 2);
       ctx.fillStyle = "white";
       ctx.fill();

       // T
       document.addEventListener('DOMContentLoaded', function () {
         const canvas = document.getElementById("canvas");
         const ctx = canvas.getContext("2d");
     
         function drawGround() {
             // Display brown ground
             ctx.fillStyle = "brown";
             ctx.fillRect(0, canvas.height - 30, canvas.width, 30);
     
             // Display light gray sky
             ctx.fillStyle = "lightgray";
             ctx.fillRect(0, 0, canvas.width, canvas.height - 30);
         }
     
         function drawSnowText() {
             ctx.font = "80px Verdana";
             ctx.textAlign = "center";
             ctx.textBaseline = "top";
             ctx.fillStyle = "blue";
             ctx.fillText("SNOW", canvas.width / 2, 10);
         }
     
         function drawSnowman() {
             // Bottom circle
             ctx.beginPath();
             ctx.arc(150, 200, 50, 0, Math.PI * 2);
             ctx.fillStyle = "white";
             ctx.fill();
     
             // Middle circle
             ctx.beginPath();
             ctx.arc(150, 120, 40, 0, Math.PI * 2);
             ctx.fillStyle = "white";
             ctx.fill();
     
             // T
     