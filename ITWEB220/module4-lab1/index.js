function parseScores(scoresString) {
   // Split the space-separated string of scores into an array
   return scoresString.split(" ");
 }
 
 function buildDistributionArray(scoresArray) {
   // Initialize grade distribution array with zeros
   const distributionArray = [0, 0, 0, 0, 0];
 
   // Loop through scores array and tally up grade occurrences
   for (const score of scoresArray) {
     const numericScore = parseInt(score);
 
     if (numericScore >= 90) {
       distributionArray[0]++; // A
     } else if (numericScore >= 80) {
       distributionArray[1]++; // B
     } else if (numericScore >= 70) {
       distributionArray[2]++; // C
     } else if (numericScore >= 60) {
       distributionArray[3]++; // D
     } else {
       distributionArray[4]++; // F
     }
   }
 
   return distributionArray;
 }
 
 function setTableContent(scoresString) {
   // Call parseScores and buildDistributionArray
   const scoresArray = parseScores(scoresString);
   const distributionArray = buildDistributionArray(scoresArray);
 
   // Get the table row with id "firstRow"
   const firstRow = document.getElementById("firstRow");
 
   // Generate bars using div elements based on grade distribution
   for (let i = 0; i < distributionArray.length; i++) {
     const barHeight = distributionArray[i] * 10;
     const barColorClass = `bar${i + 1}`;
 
     // Create div element for each bar with appropriate height and color class
     const barDiv = document.createElement("div");
     barDiv.style.height = `${barHeight}px`;
     barDiv.classList.add("bar", barColorClass);
 
     // Append the div element to the firstRow
     firstRow.appendChild(barDiv);
   }
 }

 window.onload = function() {
   // Your entire JavaScript code here
 };
 
 
 // Example usage:
 setTableContent("45 78 98 83 86 99 90 59");
 