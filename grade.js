// student grades
  function getGrade(marks) {
    if (marks >= 80) {
      return "A";
    } else if (marks >= 60) {
      return "B";
    } else if (marks >= 50) {
      return "C";
    } else if (marks >= 40) {
      return "D";
    } else {
      return "E";
    }
  }
  
  function promptForMarks() {
    let marks = prompt("Enter student marks (0-100):");
    marks = parseInt(marks); // Convert input to a number
  
    if (isNaN(marks) || marks < 0 || marks > 100) {
      alert("Invalid input. Please enter a number between 0 and 100.");
      return promptForMarks(); // Recursively prompt again if input is invalid
    }
  
    return marks;
  }
  
  let studentMarks = promptForMarks();
  let grade = getGrade(studentMarks);
  console.log("Grade:", grade);