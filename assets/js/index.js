var quiz = require('./controllers/quiz');
var ui = require('./controllers/ui');

console.log(ui.displayQuestion(quiz.getQuestion()));