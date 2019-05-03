
// Store the results of the last quiz
function storeResults(clear) {
    // Fetch the total answers
    var totalAnswers = window.localStorage.getItem("RightAnswers");

    // If clear is set, reset the totalAnswers
    if ((totalAnswers === undefined) || (totalAnswers == null) || (clear !== undefined)) {
      totalAnswers = RightAnswers;
    } else {
        console.log("Total is :"+totalAnswers+":");
        totalAnswers = parseInt(totalAnswers) + RightAnswers;
    }

    window.localStorage.setItem("RightAnswers", totalAnswers);
  }
