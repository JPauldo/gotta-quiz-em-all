var startButton = document.querySelector("#start-button");
var restartButton = document.querySelector("#restart-button")
var quizStart = document.querySelector("#quiz-start");
var quizSection = document.querySelector("#quiz-questions");
var quizEnd = document.querySelector("#quiz-end");
var questionList = quizSection.children[1].children[0];

var questionsLeft;

var quizQuestions;
var qFormat;

function getQuestions() {
  quizQuestions = [
    {
      question: "Which one is wrong?",
      choices: ["Correct", "Correct", "Wrong", "Correct"],
      correct: "Wrong"
    },
    {
      question: "Which one is correct?",
      choices: ["Wrong", "Correct", "Wrong", "Wrong"],
      correct: "Correct"
    },
    {
      question: "It's black, it's ___.",
      choices: ["Orange", "Magenta", "Black", "White"],
      correct: "White"
    },
    {
      question: "Ain't nobody got ___ for that!",
      choices: ["Time", "Jello", "Money", "Life"],
      correct: "Time"
    },
    {
      question: "Wake up in the morning feeling ___.",
      choices: ["Like Madonna", "I'm dead", "Like P. Diddy", "Refreshed"],
      correct: "Like P. Diddy"
    }
  ];
}

function startQuiz() {
  quizStart.setAttribute("class", "hide");
  quizSection.setAttribute("class", "show");
  questionsLeft = 3;

  getQuestions();
  setQuiz();
}

function endQuiz() {
  quizSection.setAttribute("class", "hide");
  quizEnd.setAttribute("class", "show");
}

function setQuiz() {
  var qIndex = Math.floor(Math.random() * quizQuestions.length);
  qFormat = quizQuestions[qIndex];
  quizSection.getElementsByTagName("p")[0].textContent = qFormat.question;
  
  for (let i = 0; i < questionList.children.length; i++) {
    questionList.children[i].textContent = qFormat.choices[i];
  }
  
  quizQuestions.splice(qIndex, 1);
}

function clicked(evt) {
  questionsLeft--;
  if (questionsLeft === 0) {
    endQuiz();
  } else {
    setQuiz();
  }
}

function restartQuiz(evt) {
  quizEnd.setAttribute("class", "hide");
  quizStart.setAttribute("class", "show");
}

startButton.addEventListener("click", startQuiz);
questionList.addEventListener("click", clicked);
restartButton.addEventListener("click", restartQuiz);

