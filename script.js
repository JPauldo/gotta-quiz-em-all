var startButton = document.querySelector("#start-button");
var restartButton = document.querySelector("#restart-button")
var quizStart = document.querySelector("#quiz-start");
var quizSection = document.querySelector("#quiz-questions");
var quizEnd = document.querySelector("#quiz-end");
console.log(quizSection.children[1].children[0].children);
var questionList = quizSection.children[1].children[0];

function startQuiz() {
  quizStart.setAttribute("class", "hide");
  quizSection.setAttribute("class", "show");
}

function clicked(evt) {
  console.log("This was clicked: " + evt.target.textContent);
  quizSection.setAttribute("class", "hide");
  quizEnd.setAttribute("class", "show");
}

function restartQuiz(evt) {
  console.log("This was clicked: " + evt.target.textContent);
  quizEnd.setAttribute("class", "hide");
  quizStart.setAttribute("class", "show");
}

startButton.addEventListener("click", startQuiz);
questionList.addEventListener("click", clicked);
restartButton.addEventListener("click", restartQuiz);

