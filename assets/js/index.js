var Observable = require('./lib/observable');
var quiz = require('./controllers/quiz');
var ui = require('./controllers/ui');
const nodelist2array = require('./lib/nodelist2array');

// instantiate new Observer class
const updateDebugObserver = new Observable();
const uiLabelObserver = new Observable();
// subscribe to some observers
uiLabelObserver.subscribe(ui.showAnswer);

document.body.addEventListener('click', (ev)=>{
    if(ev.target.tagName === "LABEL"){
        let answer = ev.target.innerHTML;
        quiz.answers.push(answer);
        uiLabelObserver.notify(quiz);
    }
  });

quiz.init();
ui.displayQuestion(quiz);    
