var startButton = document.querySelector("#start-button");
var restartButton = document.querySelector("#restart-button")
var quizStart = document.querySelector("#quiz-start");
var quizSection = document.querySelector("#quiz-questions");
var quizEnd = document.querySelector("#quiz-end");
var questionList = quizSection.children[1].children[0];

var questionFormat = {
  question: "Which one is wrong?",
  choices: ["Correct", "Correct", "Wrong", "Correct"],
  correct: "Wrong"
}

function startQuiz() {
  quizStart.setAttribute("class", "hide");
  quizSection.setAttribute("class", "show");
  setQuiz();
}

function endQuiz() {
  quizSection.setAttribute("class", "hide");
  quizEnd.setAttribute("class", "show");
}

function setQuiz() {
  quizSection.getElementsByTagName("p").textContent = questionFormat.question;
  for (let i = 0; i < questionList.children.length; i++) {
    questionList.children[i].textContent = questionFormat.choices[i];
  }
}

function clicked(evt) {
  console.log("This was clicked: " + evt.target.textContent);
  showFeedback(evt.target.textContent)
  endQuiz();
}

function restartQuiz(evt) {
  console.log("This was clicked: " + evt.target.textContent);
  quizEnd.setAttribute("class", "hide");
  quizStart.setAttribute("class", "show");
}

startButton.addEventListener("click", startQuiz);
questionList.addEventListener("click", clicked);
restartButton.addEventListener("click", restartQuiz);

