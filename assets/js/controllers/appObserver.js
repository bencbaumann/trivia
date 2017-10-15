var Observable = require('./lib/observable');
var quiz = require('./controllers/quiz');
var ui = require('./controllers/ui');

// instantiate new Observer class
const appObserver = new Observable();
// subscribe to some observers
appObserver.subscribe(quiz.init);
appObserver.subscribe(ui.updateObservablesDiv);

// notify all observers about new data on event
// input.addEventListener('keyup', e => {
//     headingsObserver.notify(e.target.value);
//   });
console.log(ui.divObservables);
ui.divObservables.innerHTML ="test1";
appObserver.notify("test2");

// const uiObserver = new Observable();
// uiObserver.subscribe(quiz.init);
// uiObserver.notify();

quiz.init();


// uiObserver.subscribe(quiz.next);
// uiObserver.notify(quiz);

// quiz.start();
// ui.displayQuestion(quiz.getQuestion());








// ui.next(appObserver.notify(ui.displayQuestion(quiz.getQuestion(quiz.position))));
// ui.next(appObserver.notify(quiz.next));


