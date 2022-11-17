// Elements capture for use
var header = document.body.getElementsByTagName("header")[0];
var quizStart = document.querySelector("#quiz-start");
var startButton = document.querySelector("#start-button");
var quizSection = document.querySelector("#quiz-questions");
var questionList = quizSection.children[1].children[0];
var footnote = document.body.getElementsByTagName("footer")[0];
var quizEnd = document.querySelector("#quiz-end");
var restartButton = document.querySelector("#restart-button");

// Global variables
var timeLeft;
var timer;
var defaultQuiz = "coding";
var questionsLeft;
var questions;
var qFormat;
var finalScore;

// Retrieves question sets based on provide quiz type
function getQuestions(quizType) {
  questions = quizQuestions[quizType];
}

// Transitions from questions to end screen and displays user's final score
function endQuiz() {
  finalScore = timeLeft;
  quizEnd.getElementsByTagName("p")[0].append(timeLeft);
  quizSection.setAttribute("class", "hide");
  quizEnd.setAttribute("class", "show");
}

// Sets the question and answers on the screen
function setQuiz() {
  var qIndex = Math.floor(Math.random() * questions.length);
  qFormat = questions[qIndex];
  quizSection.getElementsByTagName("p")[0].textContent = qFormat.question;
  
  // Sets the choices for the question
  for (let i = 0; i < questionList.children.length; i++) {
    questionList.children[i].textContent = qFormat.choices[i];
  }
  
  questions.splice(qIndex, 1);
}

// Clears the interval and sets the timer to 0
function clearClock() {
  clearInterval(timer);
  header.children[1].textContent = "Timer: 0";
}

// Starts the timer
function setClock() {
  header.children[1].textContent = "Timer: " + timeLeft;
  
  // Sets the timer to countdown every second
  timer = setInterval(() => {
    timeLeft--;
    header.children[1].textContent = "Timer: " + timeLeft;
    // 
    if (timeLeft === 0) {
      clearClock();
      endQuiz();
    }
  }, 1000);
}

// Resets the question count, the timer and clears the score
function quizReset() {
  quizEnd.getElementsByTagName("p")[0].textContent = "Your final score: ";
  questionsLeft = 5;
  timeLeft = 60;

  getQuestions(defaultQuiz);
  setClock();
}

// Sets up the quiz and transtions from the start screen to the questions
function startQuiz() {
  quizReset();
  setQuiz();

  quizStart.setAttribute("class", "hide");
  quizSection.setAttribute("class", "show");
}

// Displays feedback to the user based on their answer
function feedbackDisplay() {
  var displayTime = 1;
  footnote.setAttribute("style", "display: flex;");
  
  // Sets the feedback pace
  var footTime = setInterval(() => {
    displayTime--;
    
    // After a second removes the footer from display
    if (displayTime === 0) {
      footnote.setAttribute("style", "display: none;");
      clearInterval(footTime);
    }
  }, 1000);
}

// Checks if answer was correct or not
function checkAnswer(response) {
  if(response === qFormat.correct) {
    footnote.children[0].textContent = "Correct!"
    feedbackDisplay();
  }
  else {
    footnote.children[0].textContent = "Wrong!"
    
    feedbackDisplay();
    
    // Removes 10 seconds if the timer is above 10 seconds otherwise sets it to zero
    if(timeLeft > 10) {
      timeLeft -= 10;
    }
    else {
      timeLeft = 0;
    }
    
  }
}

// Sets up the next question for the quiz
function nextQuestion(evt) {
  questionsLeft--;
  
  checkAnswer(evt.target.textContent);
  
  // Checks how many questions are left and how much time was left
  if (questionsLeft !== 0 && timeLeft > 0) {
    setQuiz();
  } else {
    clearClock();
    endQuiz();
  }
}

// Stores users initials and score for High Scores list
function submitScore() {
  var name = document.body.getElementsByTagName("input")[0];

  // Ensures username is 3 characters long before pushing it to local storage
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
    
    localStorage.setItem(scoreStorage, JSON.stringify(scores));
  }
}

// Submits the scores and takes the user to the high score
function checkScores() {
  submitScore();
  
  header.children[1].textContent = "Timer";
  window.location.replace("../pages/high_scores.html");
  quizEnd.setAttribute("class", "hide");
  quizStart.setAttribute("class", "show");
}

// Event listeners
startButton.addEventListener("click", startQuiz);
questionList.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", checkScores);

// Functions to run on page load
checkLocalScores();
