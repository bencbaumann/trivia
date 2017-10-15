/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const questions = __webpack_require__(3);
module.exports = {
    time: 30,
    position: 0,
    questions: questions,
    answers: [],
    correct: 0,
    incorrect: 0,
    countDown: ()=>{
        setInterval(time--, 1000);
    },
    getQuestion: ()=>{
        return questions[this.position];
    },
    getAnswer: (answer)=>{
        this.answers.push(answer);
    },
    next: ()=>{
        this.position++;
    },
    previous: ()=>{
        this.position--;
    },
    startCountDown: ()=>{
        this.countDown();
    },
    init: ()=>{
        this.position = 0;
    }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Observable = __webpack_require__(2);
var quiz = __webpack_require__(0);
var ui = __webpack_require__(4);

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




/***/ }),
/* 2 */
/***/ (function(module, exports) {

// define a class
module.exports = class Observable {
  // each instance of the Observer class
  // starts with an empty array of things (observers)
  // that react to a state change
  constructor() {
    this.observers = [];
  }

  // add the ability to subscribe to a new object / DOM element
  // essentially, add something to the observers array
  subscribe(f) {
    this.observers.push(f);
  }

  // add the ability to unsubscribe from a particular object
  // essentially, remove something from the observers array
  unsubscribe(f) {
    this.observers = this.observers.filter(subscriber => subscriber !== f);
  }

  // update all subscribed objects / DOM elements
  // and pass some data to each of them
  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = [
    {
        "id": "q1",
        "question": "What's the best kind of Pizza?",
        "choices": [
            "pepporoni",
            "pepper",
            "onion"
        ],
        "answer": {
            "answer": "pepperoni",
            "img": "https://media.giphy.com/media/dOOKk7VHAvJja/giphy.gif"
        }
    },
    {
        "id": "q2",
        "question": "What's the best kind of car?",
        "choices": [
            "ford",
            "hyundai",
            "bmw"
        ],
        "answer": {
            "answer": "bmw",
            "img": "http://www.car-revs-daily.com/wp-content/uploads/2015-BMW-i8-in-White-GIF-Exterior111111.gif"
        }
    },
    {
        "id": "q3",
        "question": "What's the best kind of computer?",
        "choices": [
            "apple",
            "microsoft",
            "dell"
        ],
        "answer": {
            "answer": "apple",
            "img": "https://assets.fastcompany.com/image/upload/w_596,c_limit,q_auto:best,f_auto,fl_lossy/fc/3051334-inline-i-1-the-lost-apple-logo-youve-never-seen.gif"
        }
    },
    {
        "id": "q4",
        "question": "What's the best Soda Pop?",
        "choices": [
            "Pepsi",
            "Coke",
            "7 Up"
        ],
        "answer": {
            "answer": "Pepsi",
            "img": "https://payload376.cargocollective.com/1/0/19261/9833067/PEPSI_04_800.gif"
        }
    }
]

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nodelist2array = __webpack_require__(5);
var quiz = __webpack_require__(0);
var ui = {
    divQuestions : document.getElementById('questions'),
    divDebug : document.getElementById('debug'),
    anchorNext: document.getElementById('next'),
    anchorTest : document.getElementById('test'),
    displayQuestion(question){
        ui.divQuestions.innerHTML = "";
        var a = document.createElement('a');
        a.id="next";
        a.href="#";
        a.innerHTML="Next";
        ui.divQuestions.appendChild(a);
        var div = document.createElement('div');
        var h2 = document.createElement('h2');
        h2.innerHTML = question.question;
        div.appendChild(h2);
        div.classList = 'question';
        question.choices.forEach(function(choice) {
            var radio = document.createElement('input');
            radio.type = 'radio';
            radio.id = choice;
            radio.name = question.id;
            var label = document.createElement('label');
            label.setAttribute("for", choice);
            label.innerHTML = choice;
            div.appendChild(radio);
            div.appendChild(label);
        });
        console.log(ui.anchorNext);
        console.log(div);
        ui.divQuestions.insertBefore(div, ui.anchorNext);
    },
    nextQuestion: function(){
        quiz.position++;
        ui.displayQuestion(quiz.getQuestion());
    },
    next: function(){
        // quiz.position++;
        ui.displayQuestion(quiz.getQuestion());
    },
    showAnswer: function(){
        var els = document.getElementsByTagName('input');
        var elsArray = nodelist2array(els);
        console.log(elsArray);
        ui.divQuestions.innerHTML = "";
        var h2 = document.createElement('h2');
        h2.innerHTML = quiz.getQuestion().answer.answer;
        ui.divQuestions.appendChild(h2);
        var img = document.createElement('img');
        img.src = quiz.getQuestion().answer.img;
        ui.divQuestions.appendChild(img);
        setTimeout(ui.nextQuestion, 3000);
        
    },
    next: function(game){
    },
    debug: function(data){
        ui.divObservables.innerHTML = `<pre>${data}</pre>`;
    }
}



module.exports = ui;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (nodelist){
    let arr = [];
    for (var index = 0; index < nodelist.length; index++) {
        arr.push(nodelist[index]);
    }
    return arr;
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map