var dummyQuiz = [
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

var codingQuiz = [
  {
    question: "Where should you place your link for your stylesheet in your HTML?",
    choices: ["In the head", "In the main", "In the header", "In the footer"],
    correct: "In the head"
  },
  {
    question: "What does CSS stand for?",
    choices: ["Creative Super Suite", "Cascading Style Sheets", "Cascading Styling Sheets", "Coding Style Slabs"],
    correct: "Cascading Style Sheets"
  },
  {
    question: "Which of the following is not property for the flex parent?",
    choices: ["align-content", "align-items", "align-self", "justify-content"],
    correct: "align-self"
  },
  {
    question: "Which of these is flex a shorthand for?",
    choices: ["flex-grow", "flex-shrink", "flex-basis", "All of the Above"],
    correct: "All of the Above"
  },
  {
    question: "Which of these are not a method of the Math object?",
    choices: ["Floor", "Multiply", "Ceil", "Random"],
    correct: "Multiply"
  },
  {
    question: "What is a use for the alt attribute on the img tag?",
    choices: ["Provides Text for Screen Reader", "Alt. Image for Broken Image Link", "Caption for the Image", "Changes Image Based on Browser"],
    correct: "Provides Text for Screen Reader"
  },
  {
    question: "Which git command do you use to stage your changes?",
    choices: ["push", "add", "checkout", "commit"],
    correct: "commit"
  },
  {
    question: "Which of the following has highest level of specificity?",
    choices: ["p.test", "p", '<p style="color: pink;">', "p#demo"],
    correct: '<p style="color: pink;">'
  },
  {
    question: "What is JavaScripts primarily provide for a webpage?",
    choices: ["Functionality", "Structure", "Presentation", "Data Management"],
    correct: "Functionality"
  },
  {
    question: "A webpage's HTML is primarily composed of the ___ and ___ elements.",
    choices: ["Header; Main", "Head; Body", "Header; Footer", "Section; Aside"],
    correct: "Head; Body"
  }
];

var pokéQuiz = [
  {
    question: "Which Pokémon was the first Pokémon to be designed?",
    choices: ["Pikachu", "Bulbasuar", "Rhydon", "Mew"],
    correct: "Rhydon"
  },
  {
    question: "Which one of these Pokémon is the first in the Unovan Pokédex?",
    choices: ["Snivy", "Victini", "Joltik", "Pikachu"],
    correct: "Victini"
  },
  {
    question: "Though Pikachu is the mascot of the series, it was not planed to be. Who was original going to be the mascot?",
    choices: ["Clefairy", "Charmander", "Jigglypuff", "Eevee"],
    correct: "Clefairy"
  },
  {
    question: "Which is the only Pika-clone not in the Fairy egg group?",
    choices: ["Plusle", "Pikachu", "Emolga", "Minun"],
    correct: "Emolga"
  },
  {
    question: "When a Pokémon with Blaze uses a Fire-type move, the move's power will be increased by ___ if the user has less than or equal to ___ of its maximum HP remaining.",
    choices: ["50%; half", "50%; one-third", "100%; one-fourth", "25%; one-third"],
    correct: "50%; one-third"
  },
  {
    question: "Which ability does not affect the Pokémon's typing?",
    choices: ["Imposter", "Libero", "Protean", "Illusion"],
    correct: "Illusion"
  },
  {
    question: "In Gen VI, Steel lost two resistances. What is one of them?",
    choices: ["Fire", "Ghost", "Grass", "Fairy"],
    correct: "Ghost"
  },
  {
    question: "Kantonian Ninetails is a Fire-type. What is its Alolan varient's typing?",
    choices: ["Ice-Fairy", "Ice-Ghost", "Ghost", "Psychic-Fire"],
    correct: "Ice-Fairy"
  },
  {
    question: "Galarian Farfetch'd evolves after landing three ___ hits in a single battle.",
    choices: ["super effective", "ineffective", "critical", "dire"],
    correct: "critical"
  },
  {
    question: "As of Gen VIII, which region's Pokémon have yet to have a regional varient?",
    choices: ["Johto", "Kalos", "Sinnoh", "Hoenn"],
    correct: "Sinnoh"
  }
];

var gamingQuiz = [
  {
    question: "",
    choices: ["", "", "", ""],
    correct: ""
  },
  {
    question: "",
    choices: ["", "", "", ""],
    correct: ""
  },
  {
    question: "",
    choices: ["", "", "", ""],
    correct: ""
  },
  {
    question: "",
    choices: ["", "", "", ""],
    correct: ""
  },
  {
    question: "",
    choices: ["", "", "", ""],
    correct: ""
  },
  {
    question: "",
    choices: ["", "", "", ""],
    correct: ""
  },
  {
    question: "",
    choices: ["", "", "", ""],
    correct: ""
  },
  {
    question: "",
    choices: ["", "", "", ""],
    correct: ""
  },
  {
    question: "",
    choices: ["", "", "", ""],
    correct: ""
  },
  {
    question: "",
    choices: ["", "", "", ""],
    correct: ""
  }
];

var quizQuestions = {
  test: dummyQuiz,
  coding: codingQuiz,
  pokémon: pokéQuiz,
  gaming: gamingQuiz
}
