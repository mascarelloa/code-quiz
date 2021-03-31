// These are the globally declared variables.
var startButton = document.querySelector("#start");
var questionScreen = document.querySelector("#questions");
var questionPool = 0;
// var time = questions.length * 15;
var theChoices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var finalScore = 0;
var correct = document.querySelector("#correct");
var wrong = document.querySelector("#wrong");
var counter = 75;
var theTimer = document.querySelector("#time");

// This will start the quiz when the Start button is clicked by making the start screen hide and the questions show.
startButton.onclick = startQuiz;

function gameTimer () {
    var timeInterval = setInterval(function() {
        counter--;
        theTimer.textContent = counter;
        
        if(counter === 0) {
        clearInterval(timeInterval);
         gameOver();
        }

    }, 1000); 
}

function startQuiz() {
  gameTimer();
  var startScreen = document.querySelector("#start-screen");
  startScreen.setAttribute("class", "hide");
  questionScreen.removeAttribute("class");
  getQuestion();
}


// This will pull a random question from the questions [pool and display it's "title".
function getQuestion() {
  var currentQuestion = questions[questionPool];
  var questionTitle = document.querySelector("#question-title");
  questionTitle.textContent = currentQuestion.title;


  // This loops through the choices array to display each choice
  for (var i = 0; i < currentQuestion.choice.length; i++) {
    var userChoice = document.createElement("button");
    userChoice.setAttribute("class", "choice");
    userChoice.setAttribute("value", currentQuestion.choice[i]);
    userChoice.textContent = i + 1 + ". " + currentQuestion.choice[i];
    theChoices.appendChild(userChoice);
    
    // This will start the process of checking whatever choice the user clicked on.
    userChoice.onclick = checkAnswer;
  }
    /// This will get the value of whatever choice the user clicked. 
    function checkAnswer(event) {
    var userAnswer = event.target.value;
    console.log(userAnswer);
    // This will compare the value of choice clicked to the answer from the question pool.
    if (userAnswer === questions[questionPool].answer) {
      correct.removeAttribute("class");
    //   setTimeout(function(){ correct.innerHTML=""; }, 1000);
    } else {
        wrong.removeAttribute("class");
        // setTimeout(function(){ wrong.innerHTML=""; }, 1000);
        counter-=10;
    }

    // This will clear the previous choices and allow the next loop of choices to populate.
    theChoices.innerHTML="";
    // correct.innerHTML="";
    // wrong.innerHTML="";

    // This will move on to the next question after previous has been answers (it increments to the next object in the questions array)
    questionPool++;


    // This will end the game if the user has gone through all the questions, otherwise it will get the next question.
    if (questionPool === questions.length-1){
        gameOver();
    } else {
        getQuestion()
    }
  }
}

// When the game is over, this will hide the questions screen and show the end screen.
function gameOver() {
    questionScreen.setAttribute("class", "hide");
    endScreen.removeAttribute("class");
    }
