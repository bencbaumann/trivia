var quiz = require('./controllers/quiz');
var ui = require('./controllers/ui');

ui.displayQuestion(quiz.getQuestion());

ui.nextA.addEventListener("click", quiz.position++, ui.displayQuestion(quiz.position), false);