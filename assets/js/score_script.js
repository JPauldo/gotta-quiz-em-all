var clearButton = document.querySelector("#clear-scores");
var returnButton = document.querySelector("#index-return")
console.log(document.querySelector("#clear-scores"));
var scoreList = document.querySelector("#high-scores")

var scoreStorage = "scores";
var scoreJson = localStorage.getItem(scoreStorage);
var scores = JSON.parse(scoreJson);

function checkLocalScores() {
  if(scores === null) {
    scores = [];
  }
}

function clearScores() {
  localStorage.removeItem(scoreStorage);
  window.location.reload();
}

function displayScores() {
  for (var i = 0; i < scores.length; i++) {
    var scoreLI = document.createElement("li");
    scoreLI.textContent = scores[i].name + " - " + scores[i].score;
    console.log(scoreLI.textContent);

    scoreList.appendChild(scoreLI);
  }
}

function returnBack() {
  window.location.replace("../index.html");
}

returnButton.addEventListener("click", returnBack);
clearButton.addEventListener("click", clearScores);
checkLocalScores();
displayScores();
