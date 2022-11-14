var header = document.body.getElementsByTagName("header")[0];
var quizStart = document.querySelector("#quiz-start");
var startButton = document.querySelector("#start-button");
var quizSection = document.querySelector("#quiz-questions");
var questionList = quizSection.children[1].children[0];
var footnote = document.body.getElementsByTagName("footer")[0];
var quizEnd = document.querySelector("#quiz-end");
var restartButton = document.querySelector("#restart-button");

var timeLeft;
var timer;
var defaultQuiz = "coding";
var questionsLeft;
var questions;
var qFormat;
var finalScore;

function getQuestions(quizType) {
  console.log(quizType);
  console.log(quizQuestions[quizType]);
  questions = quizQuestions[quizType];
}

function endQuiz() {
  finalScore = timeLeft;
  quizEnd.getElementsByTagName("p")[0].append(timeLeft);
  quizSection.setAttribute("class", "hide");
  quizEnd.setAttribute("class", "show");
}

function setQuiz() {
  var qIndex = Math.floor(Math.random() * questions.length);
  qFormat = questions[qIndex];
  quizSection.getElementsByTagName("p")[0].textContent = qFormat.question;
  
  for (let i = 0; i < questionList.children.length; i++) {
    questionList.children[i].textContent = qFormat.choices[i];
  }
  
  questions.splice(qIndex, 1);
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
  questionsLeft = 5;
  timeLeft = 60;

  getQuestions(defaultQuiz);
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

function submitScore() {
  var name = document.body.getElementsByTagName("input")[0];
  console.log(document.body.getElementsByTagName("input")[0].value);
  if([...name.value].length < 3) {
    window.alert("Please enter 3 characters.")
  }
  else {
    var scoreEntry = {
      name: name.value,
      score: finalScore
    };
    scores.push(scoreEntry);
    scores.sort((a, b) => b.score - a.score);
    // scores.splice(maxScores);
    localStorage.setItem(scoreStorage, JSON.stringify(scores));
  }
}

function checkScores() {
  submitScore();
  header.children[1].textContent = "Timer";
  window.location.replace("../pages/high_scores.html");
  quizEnd.setAttribute("class", "hide");
  quizStart.setAttribute("class", "show");
}

startButton.addEventListener("click", startQuiz);
questionList.addEventListener("click", clicked);
restartButton.addEventListener("click", checkScores);
clearButton.addEventListener("click", clearScores);

