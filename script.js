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


//define questions
const questions = [
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
//timer when start button is clicked

