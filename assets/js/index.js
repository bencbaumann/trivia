var quiz = require('./controllers/quiz');
var ui = require('./controllers/ui');

ui.displayQuestion(quiz.getQuestion());

ui.nextA.addEventListener('onclick', alert("clicked it"));