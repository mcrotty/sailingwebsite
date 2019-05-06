
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

  function Q1IsAnswered(track, right) {
    QuestionsAnswered = QuestionsAnswered + 1;
    var s = document.querySelector("#" + track)
    if ((right !== undefined) && right) {
      RightAnswers = RightAnswers + 1;
      s.innerHTML = '<h4><span class="badge badge-secondary">Question Answered</span> \
        <span class="badge badge-pill badge-success">Right!</span></h4>';
    }              
    else {
      s.innerHTML = '<h4><span class="badge badge-secondary">Question Answered</span> \
        <span class="badge badge-pill badge-warning">Wrong</span></h4>';
    }
  }

  function format() {
    var entry = confirm("Are you sure want to format this page?");
      var s = document.querySelector("#body");
      if (entry == true) {
        s.innerHTML = "";
      }
  }