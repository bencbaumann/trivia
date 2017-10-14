var quiz = require('./controllers/quiz');
var ui = require('./controllers/ui');

ui.displayQuestion(quiz.getQuestion());

document.getElementById('next').addEventListener("click", quiz.position++, nextQuestion);

function nextQuestion(){
    console.log("Successful event capture");
    ui.displayQuestion(++quiz.position);
}