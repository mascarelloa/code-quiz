// These are the globally declared variables.
var startButton = document.querySelector("#start");
var questionScreen = document.querySelector("#questions");
var questionPool = 0;
var theTimer = document.querySelector("#time");
var time = questions.length * 15;
var theChoices = document.querySelector("#choices");

// This will start the quiz when the Start button is clicked by making the start screen hide and the questions show.
startButton.onclick = startQuiz;

function startQuiz() {
  var startScreen = document.querySelector("#start-screen");
  startScreen.setAttribute("class", "hide");
  questionScreen.removeAttribute("class");
  getQuestion();
}


// This will pull and display a current question's title and choices.
function getQuestion() {
  var currentQuestion = questions[questionPool];
  var questionTitle = document.querySelector("#question-title");
  questionTitle.textContent = currentQuestion.title;
  
  for (var i = 0; i < currentQuestion.choice.length; i++) {
    var userChoice = document.createElement("button");
    userChoice.setAttribute("class", "choice");
    userChoice.setAttribute("value", currentQuestion.choice[i]);
    userChoice.textContent = i + 1 + ". " + currentQuestion.choice[i];
    theChoices.appendChild(userChoice);

    userChoice.onclick = checkAnswer;
  }

    function checkAnswer(event) {
    var userAnswer = event.target.value;
    console.log(userAnswer);

    if (userAnswer === questions[questionPool].answer) {
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }  
    
    theChoices.innerHTML="";

    questionPool++;

    getQuestion();
  }
}
// This will compare the user's choice with the answer and decide if it is incorrect or correct.

// if (userAnswer === currentQuestion.answer) {
//     console.log("True")
// display correct message
// add point to score and move to next question
// } else {
//display incorrect message.
//decrement time, and move to next question.

// }
