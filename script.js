//GIVEN I am taking a code quiz//
//WHEN I click the start button//
//THEN a timer starts and I am presented with a question//
//WHEN I answer a question//
//THEN I am presented with another question//
//WHEN I answer a question incorrectly/
//THEN time is subtracted from the clock//
//WHEN all questions are answered or the timer reaches 0//
//THEN the game is over//
//WHEN the game is over//
//THEN I can save my initials and score//

//i also need to research how to add the correct/incorrect sfx//

//get reference to element

var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");

var startQuizBtn = document.getElementById("start");

var questionDiv = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var answerCheck = document.getElementById("answerCheck");

var summary = document.getElementById("end-screen");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initialInput = document.getElementById("initialInput");
var everything = document.getElementById("everything");
var feedback = document.getElementById("feedback");

var highScoreSection = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");



//define questions
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c. alerts"
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        choices: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
        answer: "b. other arrays"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        answer: "c. quotes"
    },
    {
        question: "The condition in an if / else statement is enclosed with _____",
        choices: ["a. quotes", "b. curly brackets", "c. parenthesis", "d. white bread"],
        answer: "c. parenthesis"
    },
    {
        question: "The first index of an array is ____.",
        choices: ["a. 0", "b. 1", "c. 8", "d. any"],
        answer: "a. 0"
    },
];

//questions to local storage
localStorage.setItem("questions",JSON.stringify(questions));

//timer when start button is clicked

function countdown() {
    var timeInterval = setInterval(function () {
    
        if (timeLeft <= 0) {
            timeLeft = 0;
        } else {
            //if there's time left, reduce the time
            timeLeft--;
        }
        //update time displayed
        timerEl.textContent = timeLeft;

        //clear timer so user doesnt have to wait
        if (timeLeft <= 0 || isEnd) {
            clearInterval(timeInterval);
            showEndScreen();
        }

    }, 1000);
}

// start the quiz
function startQuiz() {
    //set maximum time to 75 seconds
    timerEl.textContent = timeLeft;

    //start the timer
    countdown();
    //initialise the quiz
    init(questionIndex);
}

// checking to see if the answer is correct
function checkAnswer(answer) {

    //answer is correct
    if (answer.getAttribute("is-correct") == "true") {
        //if correct display 'Correct!'
        feedback.textContent = "Correct!";
    } else {
        //incorrect
        feedback.textContent = "Wrong!";
        console.log("wrong");
    }

    // show the next question
    if (questionIndex < (questions.length - 1)) {
        questionIndex++;
        nextQuestion(questionIndex);
    } else {
        //if no more questions, display end screen
        isEnd = true;
    }

};

function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
}

//event listenrs
startQuizBtn.addEventListener("click", newQuiz);
choices.addEventListener("click");


submitInitialBtn.addEventListener("click", function(event){ 
    storeHighScores(event);
});

viewHighScore.addEventListener("click", function(event) { 
    showHighScores(event);
});

goBackBtn.addEventListener("click", function() {
    startDiv.style.display = "block";
    highScoreSection.style.display = "none";
});

clearHighScoreBtn.addEventListener("click", function(){
    window.localStorage.removeItem("high scores");
    listOfHighScores.innerHTML = "High Scores Cleared!";
});