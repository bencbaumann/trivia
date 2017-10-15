var Observable = require('./lib/observable');
var quiz = require('./controllers/quiz');
var ui = require('./controllers/ui');

// instantiate new Observer class
const quizInitObserver = new Observable();
const quizNextObserver = new Observable();
const updateDebugObserver = new Observable();
const uiNextObserver = new Observable();
// subscribe to some observers
quizInitObserver.subscribe(quiz.init);
quizNextObserver.subscribe(ui.displayQuestion);
uiNextObserver.subscribe(ui.showAnswer);

// ui.anchorNext.addEventListener('click', (ev)=>{
//     uiNextObserver.notify();    
// });
ui.anchorTest.addEventListener('click', (ev)=>{
    quizNextObserver.notify(quiz.getQuestion(quiz.position));    
});

document.body.addEventListener('click', function(event) {
    if (event.target.id.toLowerCase() === 'next') {
        uiNextObserver.notify();    
    }
  });

quiz.init();
quizNextObserver.notify(quiz.getQuestion(quiz.position));    

// quiz.next();



// appObserver.subscribe(quiz.next);
// appObserver.subscribe(ui.divDebug);

// notify all observers about new data on event
// input.addEventListener('keyup', e => {
//     headingsObserver.notify(e.target.value);
//   });
// console.log(appObserver);
// ui.divDebug.innerHTML ="test1";
// quizInitObserver.notify(quiz);

// const uiObserver = new Observable();
// uiObserver.subscribe(quiz.init);
// uiObserver.notify();




// uiObserver.subscribe(quiz.next);
// uiObserver.notify(quiz);

// quiz.start();
// ui.displayQuestion(quiz.getQuestion());








// ui.next(appObserver.notify(ui.displayQuestion(quiz.getQuestion(quiz.position))));
// ui.next(appObserver.notify(quiz.next));


