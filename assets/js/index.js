var quiz = require('./controllers/quiz');
var ui = require('./controllers/ui');

ui.displayQuestion(quiz.getQuestion());

// document.getElementById('next').addEventListener("click", nextQuestion);

function nextQuestion(){
    console.log("Successful event capture");
    ++quiz.position
    ui.displayQuestion(quiz.getQuestion());
}