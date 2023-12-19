// script.js

function divideArray(numbers) {
    // Initialize arrays to store even and odd numbers
    let evenNums = [];
    let oddNums = [];
  
    // Divide numbers into even and odd arrays
    for (let number of numbers) {
      if (number % 2 === 0) {
        evenNums.push(number);
      } else {
        oddNums.push(number);
      }
    }
  
    // Sort the arrays
    evenNums.sort((a, b) => a - b);
    oddNums.sort((a, b) => a - b);
  
    // Output the sorted arrays to the console
    console.log("Even numbers:");
    if (evenNums.length > 0) {
      console.log(evenNums.join('\n'));
    } else {
      console.log("None");
    }
  
    console.log("Odd numbers:");
    if (oddNums.length > 0) {
      console.log(oddNums.join('\n'));
    } else {
      console.log("None");
    }
  }
  
  // Example usage:
  let nums1 = [4, 2, 9, 1, 8];
  divideArray(nums1);
  
  let nums2 = [4, 2, 8];
  divideArray(nums2);
  
  