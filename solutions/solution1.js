function getGrade(marks) {
    if (marks > 79) {
      return 'A';
    } else if (marks >= 60) {
      return 'B';
    } else if (marks >= 50) {
      return 'C';
    } else if (marks >= 40) {
      return 'D';
    } else {
      return 'E';
    }
  }

 console.log(getGrade(35))  // research javascript console methods
                            // difference betwwen function arguments and parameters
                            // how to use js conditionals like if

  // parameters function getGirlsInTheAre(requestUser,population){}
  // arguments getGirlsIntheArea(yussuf,500000)