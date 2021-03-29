var currentQuestionIndex = 0;
var time = questions.length * 15;

var startBtn = document.querySelector("#start");
var questionsElement = document.querySelector("#questions");
var timerElement = document.querySelector("#time");
var questionChoices = document.querySelector("#choices");




function startQuiz() {
    var startScreen = document.querySelector("#start-screen");
    startScreen.setAttribute('class', "hide");
    questionsElement.removeAttribute("class");
    getCurrentQuestion()

}





// for (var i = 0; i < questions.length; i++) {

    function getCurrentQuestion() {
        var currentQuestion = questions[currentQuestionIndex];
        var titleElement = document.querySelector("#question-title")
        titleElement.textContent = currentQuestion.title;
    
        console.log(currentQuestion.title);
        for (var i = 0; i < currentQuestion.choice.length; i++) {
            var userChoice = document.createElement("button");
            userChoice.setAttribute("class", "choice")
            userChoice.setAttribute("value", currentQuestion.choice[i])
            userChoice.textContent = i + 1 + ". " + currentQuestion.choice[i];
            questionChoices.appendChild(userChoice);
        }
    }


    // // 
    // if (userAnswer === currentQuestion.answer) {
    //     // add point to score and move to next question
    // } else {
    //     //decrement time, and move to next question.
    // }

   

// }
 
startBtn.onclick = startQuiz;
