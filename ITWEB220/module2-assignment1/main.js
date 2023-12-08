
function calculateLetterGrade(score) {
    if (score >= 90) {
        return "A"
    }
    if (80 <= score && score < 90) {
        return "B"
    }
    if (70 <= score && score < 80) {
        return "C"
    }
    if (60 <= score && score < 70) {
        return "D"
    }
    if (score < 60) {
        return "F"
    }
}

function gradeCalculator() {
   let numberEntered =  parseInt(prompt("Enter the number of assignments: (Max is 10)"));
   if (!numberEntered || numberEntered > 10 || numberEntered <= 0) {
      return alert("Invalid input. Please enter a valid number of assignments.")
   }


   let sumAssignmentScores = 0
   for (let i = 1; i <= numberEntered; i++) {
    score = parseInt(prompt("Enter score by percentage for assigntment " + i))
    sumAssignmentScores = sumAssignmentScores + score
   }

   let averageAssignmentScores = sumAssignmentScores / numberEntered

   let letterGrade = calculateLetterGrade(averageAssignmentScores)

   alert("Letter Grade: " + letterGrade)

  let confirmRepeat =  confirm("Would you like to repeat the program ?")

  if (confirmRepeat === true) {
    gradeCalculator()
  } else {
    return;
  }

}

gradeCalculator();