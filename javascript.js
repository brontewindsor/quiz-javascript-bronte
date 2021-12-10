/**
 * hides intro and show question 1
 */
function startQuiz() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("question1").style.display = "inline-block";
}

/**
 * hides question 1 shows question 2
 */
function question2() {
  document.getElementById("question1").style.display = "none";
  document.getElementById("question2").style.display = "inline-block";
}

/**
 * hides question 2 shows question 3
 */
 function question3() {
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "inline-block";
  }

  /**
 * hides question 3 shows question 4
 */
function question4() {
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "inline-block";
  }

  /**
 * hides question 4 shows question 5
 */
function question5() {
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "inline-block";
  }

/**
 * hides question 5 shows results
 */
function results() {
  calculateResults()
  document.getElementById("question5").style.display = "none";
  document.getElementById("results").style.display = "inline-block";
  document.getElementById("main_image").style.display = "none";
  

}



function calculateResults() {
  let msg
  const radios1 = document.querySelectorAll('input[name="quest1"]');
  let q1Value;
  for (const rb of radios1) {
    if (rb.checked) {
      q1Value = rb.value;
      break;
    }
  }
  
  const radios2 = document.querySelectorAll('input[name="quest2"]');
  let q2Value;
  for (const rb of radios2) {
    if (rb.checked) {
      q2Value = rb.value;
      break;
    }
  }  
  
  const radios3 = document.querySelectorAll('input[name="quest3"]');
  let q3Value;
  for (const rb of radios3) {
    if (rb.checked) {
          q3Value = rb.value;
          break;
        }
      }
  const radios4 = document.querySelectorAll('input[name="quest4"]');
  let q4Value;
  for (const rb of radios4) {
    if (rb.checked) {
          q4Value = rb.value;
          break;
        }
  }  
  const radios5 = document.querySelectorAll('input[name="quest5"]');
  let q5Value;
  for (const rb of radios2) {
      if (rb.checked) {
        q5Value = rb.value;
        break;
      }
    }
    
    function numericalCalculation() {
      let total = Number(q1Value) + Number(q2Value) + Number(q3Value) + Number(q4Value) + Number(q5Value);
      result = total;

      
      if (result < 6 ) {
        msg = "Paris";

      }
      else if (result < 11 ) {
        msg = "Southeast Asia";
      }
      else if (result < 16 ) {
        msg = "Iceland";
      }
      else {
        msg = "Maldives";
      }

  numericalCalculation() 
  document.getElementById("result").innerHTML = msg
    }
}