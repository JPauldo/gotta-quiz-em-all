var clearButton = document.querySelector("#clear-scores");
console.log(document.querySelector("#clear-scores"));
var scoreList = document.querySelector("#high-scores")

var maxScores = 20;
var scoreStorage = "scores";
var scoreJson = localStorage.getItem(scoreStorage);
var scores = JSON.parse(scoreJson) ?? [];
var bottomScore = scores[maxScores - 1]?.score ?? 0;

function clearScores() {
  localStorage.clear();
}

function displayScores() {
  scoreList.innerHTML = scores.map((score) => "<li>" + score.name + " - " + score.score).join('');
}

clearButton.addEventListener("click", clearButton);
displayScores();
