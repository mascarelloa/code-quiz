var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
var displayScore = document.querySelector("#final-Score");
var scoreBoard = document.querySelector(".score-board");

displayHighscores();

function displayHighscores() {

    //This will loop through the scores and display them on the screen. 
  for (var i = 0; i < highscores.length; i++) {
    var score = document.createElement("li");
    score.textContent = highscores[i].initials + " - " + highscores[i].score;
    scoreBoard.appendChild(score);
  }
}

