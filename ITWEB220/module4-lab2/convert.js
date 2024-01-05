window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
}

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
}

function convertCtoF(celsius) {
   return celsius * 9/5 + 32;
 }
 
 function convertFtoC(fahrenheit) {
   return (fahrenheit - 32) * 5/9;
 }
 
 function domLoaded() {
   const cInput = document.getElementById("cInput");
   const fInput = document.getElementById("fInput");
   const convertButton = document.getElementById("convertButton");
   const errorMessage = document.getElementById("errorMessage");
   const temperatureImage = document.getElementById("temperatureImage");
 
   function clearOpposingField() {
     cInput.value = "";
     fInput.value = "";
   }
 
   function handleInputChange(event) {
     clearOpposingField();
     errorMessage.innerHTML = "";
 
     const inputValue = parseFloat(event.target.value);
 
     if (isNaN(inputValue)) {
       errorMessage.innerHTML = `${event.target.value} is not a number`;
     }
   }
 
   function handleConvertButtonClick() {
     const celsiusValue = parseFloat(cInput.value);
     const fahrenheitValue = parseFloat(fInput.value);
 
     if (!isNaN(celsiusValue)) {
       const convertedTemperature = convertCtoF(celsiusValue);
       fInput.value = convertedTemperature;
     } else if (!isNaN(fahrenheitValue)) {
       const convertedTemperature = convertFtoC(fahrenheitValue);
       cInput.value = convertedTemperature;
     } else {
       errorMessage.innerHTML = "Enter a valid temperature";
     }
 
     // Change image based on the converted temperature
     const temperature = parseFloat(fInput.value);
     temperatureImage.src = temperature >= 32 ? "hot.jpg" : "cold.jpg";
   }
 
   // Register input event handlers
   cInput.addEventListener("input", handleInputChange);
   fInput.addEventListener("input", handleInputChange);
 
   // Register Convert button click event handler
   convertButton.addEventListener("click", handleConvertButtonClick);
 }
 
 // Register domLoaded function for the DOMContentLoaded event
 document.addEventListener("DOMContentLoaded", domLoaded);
 