var header = document.body.getElementsByTagName("header")[0];
var quizStart = document.querySelector("#quiz-start");
var startButton = document.querySelector("#start-button");
var quizSection = document.querySelector("#quiz-questions");
var questionList = quizSection.children[1].children[0];
var footnote = document.body.getElementsByTagName("footer")[0];
var quizEnd = document.querySelector("#quiz-end");
var restartButton = document.querySelector("#restart-button");

var questionsLeft;
var quizQuestions;
var qFormat;
var timeLeft;
var timer;

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

function endQuiz() {
  quizEnd.getElementsByTagName("p")[0].append(timeLeft);
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

function clearClock() {
  clearInterval(timer);
  header.children[1].textContent = "Timer: 0";
}

function setClock() {
  header.children[1].textContent = "Timer: " + timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    header.children[1].textContent = "Timer: " + timeLeft;
    if (timeLeft === 0) {
      clearClock();
      endQuiz();
    }
  }, 1000);
}

function quizReset() {
  quizEnd.getElementsByTagName("p")[0].textContent = "Your final score: ";
  questionsLeft = 3;
  timeLeft = 30;

  getQuestions();
  setClock();
}

function startQuiz() {
  quizStart.setAttribute("class", "hide");
  quizSection.setAttribute("class", "show");
  quizReset();
  setQuiz();
}

function feedbackDisplay() {
  var displayTime = 1;
  footnote.setAttribute("style", "display: flex;");
  
  var footTime = setInterval(() => {
    displayTime--;
    if (displayTime === 0) {
      footnote.setAttribute("style", "display: none;");
      clearInterval(footTime);
    }
  }, 1000);
}

function checkAnswer(response) {
  if(response === qFormat.correct) {
    console.log(footnote.children[0]);
    footnote.children[0].textContent = "Correct!"
    feedbackDisplay();
  }
  else {
    footnote.children[0].textContent = "Wrong!"
    feedbackDisplay();
    if(timeLeft > 10) {
      timeLeft -= 10;
    }
    else {
      timeLeft = 0;
    }
    
  }
}

function clicked(evt) {
  questionsLeft--;
  checkAnswer(evt.target.textContent);
  if (questionsLeft !== 0 && timeLeft > 0) {
    setQuiz();
  } else {
    clearClock();
    endQuiz();
  }
}

function restartQuiz(evt) {
  header.children[1].textContent = "Timer"
  quizEnd.setAttribute("class", "hide");
  quizStart.setAttribute("class", "show");
}

startButton.addEventListener("click", startQuiz);
questionList.addEventListener("click", clicked);
restartButton.addEventListener("click", restartQuiz);

