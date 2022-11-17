// Elements capture for use
var clearButton = document.querySelector("#clear-scores");
var returnButton = document.querySelector("#index-return")
var scoreList = document.querySelector("#high-scores")

// Global variables
var scoreStorage = "scores";
var scoreJson = localStorage.getItem(scoreStorage);
var scores = JSON.parse(scoreJson);

// Functions that checks to see if the scores in local storage is null
function checkLocalScores() {
  if(scores === null) {
    scores = [];
  }
}

// Clears the scores out of local storage upon request
function clearScores() {
  localStorage.removeItem(scoreStorage);
  window.location.reload();
}

// If available, displays the scores in local storage
function displayScores() {
  // Dynamically creates list items with score data
  for (var i = 0; i < scores.length; i++) {
    var scoreLI = document.createElement("li");
    scoreLI.textContent = scores[i].name + " - " + scores[i].score;

    scoreList.appendChild(scoreLI);
  }
}

// Returns the user to index
function returnToIndex() {
  window.location.replace("../index.html");
}

// Event listeners
returnButton.addEventListener("click", returnToIndex);
clearButton.addEventListener("click", clearScores);

// Functions to run on page load
checkLocalScores();
displayScores();
