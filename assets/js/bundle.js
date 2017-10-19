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

module.exports = function (nodelist){
    let arr = [];
    for (var index = 0; index < nodelist.length; index++) {
        arr.push(nodelist[index]);
    }
    return arr;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Observable = __webpack_require__(2);
var quiz = __webpack_require__(3);
var ui = __webpack_require__(5);
const nodelist2array = __webpack_require__(0);

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const questions = __webpack_require__(4);
const quiz = {
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
    getAnswer: ()=>{
        return quiz.questions[quiz.position].answer.answer;
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

module.exports = quiz;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = [
    {
        "id": "q1",
        "question": "What's the best kind of Pizza?",
        "choices": [
            "pepperoni",
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nodelist2array = __webpack_require__(0);
// var quiz = require('./quiz');
var ui = {
    divQuestions : document.getElementById('questions'),
    divDebug : document.getElementById('debug'),
    displayQuestion(quiz){
        var question = quiz.getQuestion();
        ui.divQuestions.innerHTML = "";
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
    nextQuestion: function(quiz){
        quiz.position++;
        ui.displayQuestion(quiz.getQuestion());
    },
    showAnswer: function(quiz){
        var h2 = document.createElement('h3');;
        if(quiz.answers[quiz.position] === quiz.getAnswer()){
            h2.innerHTML = `Correct: ${quiz.getAnswer()}`;
        }
        else {
            h2.innerHTML = `Incorrect: ${quiz.getAnswer()}`;
        }
        var els = document.getElementsByTagName('input');
        var elsArray = nodelist2array(els);
        console.log(elsArray);
        ui.divQuestions.innerHTML = "";
        ui.divQuestions.appendChild(h2);
        var img = document.createElement('img');
        img.src = quiz.getQuestion().answer.img;
        ui.divQuestions.appendChild(img);
        quiz.next();
        console.log(quiz);
        setTimeout(()=>{
            ui.nextQuestion(quiz);
        }, 3000);
        
    },
    next: function(game){
    },
    debug: function(data){
        ui.divObservables.innerHTML = `<pre>${data}</pre>`;
    }
}



module.exports = ui;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map