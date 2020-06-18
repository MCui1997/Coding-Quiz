//Plan, what functions do I need?
//I need functions for start button, function for the answer choice button, function to show questions, function to decrease timer
//Function to end game, function for highscores section

// Initialize all variables needed
var currentQuestionIndex = 0;
var time = 100;
var timerId;

// get elements from html pages
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var resultsEl = document.getElementById("results");
var startScreenEl = document.getElementById("start-screen");

//Calling all the functions from below, start quiz and save scores
startBtn.onclick = startQuiz;
submitBtn.onclick = saveScores;



//Updating time 
function clockTick() {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    endQuiz();
  }
}

//Actions needed after clicking start quiz, hide starting screen and load questions
//Timer begins to count down
function startQuiz() {

  startScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  timerId = setInterval(clockTick, 1000);
  timerEl.textContent = time;
  getQuestion();

}

//How to load questions from our storage
function getQuestion() {

  var currentQuestion = questions[currentQuestionIndex];
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;

  // clear out any old question choices
  choicesEl.innerHTML = "";

  // loop over choices
  currentQuestion.choices.forEach(function(choice, i) {
    // create new button for each choice
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = i + 1 + ". " + choice;

    // attach click event listener to each choice
    choiceNode.onclick = nextQuestion;

    // display on the page
    choicesEl.appendChild(choiceNode);
  });
}

//return to original color
function changeColor(){
  timerEl.style.color = "white";
  
}
//Function for when the person clicks on the answer choice
function nextQuestion() {
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 5;
  
    timerEl.textContent = time;
    timerEl.style.color = "red";
    
    setTimeout(changeColor, 200);

  }
  else{
    timerEl.style.color="green";
    setTimeout(changeColor,200);
  }
  
  currentQuestionIndex++;
  //check to see if it's the last question in the array
  if (currentQuestionIndex == questions.length) {
    endQuiz();
  } else {
    getQuestion();
  }
}

//function for when the quiz is finished
function endQuiz() {clearInterval(timerId);

  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");

  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;

  questionsEl.setAttribute("class", "hide");
}

function saveScores() {

  var initials = initialsEl.value.trim();

  if (initials !== "") {
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
    var newScore = {
      score: time,
      initials: initials
    };

    // store
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    // next page
    window.location.href = "highscores.html";
    
  }
}




