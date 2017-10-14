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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var quiz = __webpack_require__(1);
var ui = __webpack_require__(3);

ui.displayQuestion(quiz.getQuestion());

// document.getElementById('next').addEventListener("click", nextQuestion);

function nextQuestion(){
    console.log("Successful event capture");
    ++quiz.position
    ui.displayQuestion(quiz.getQuestion());
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const questions = __webpack_require__(2);
module.exports = {
    position: 0,
    questions: questions,
    answers: [],
    correct: 0,
    incorrect: 0,
    getQuestion: function(){
        return questions[this.position];
    },
    getAnswer: function(answer){
        this.answers.push(answer);
    },
    next: function(){
        this.position++;
    }
}

/***/ }),
/* 2 */
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
        "answer": "pepporoni"
    },
    {
        "id": "q2",
        "question": "What's the best kind of car?",
        "choices": [
            "ford",
            "hyundai",
            "bmw"
        ],
        "answer": "bmw"
    },
    {
        "id": "q3",
        "question": "What's the best kind of computer?",
        "choices": [
            "apple",
            "microsoft",
            "dell"
        ],
        "answer": "apple"
    }
]

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
    divQuestions : document.getElementById('questions'),
    displayQuestion(question){
        var div = document.createElement('div');
        var h2 = document.createElement('h2');
        h2.innerHTML = question.question;
        div.appendChild(h2);
        question.choices.forEach(function(choice) {
            var radio = document.createElement('input');
            radio.type = 'radio';
            radio.id = choice;
            radio.name = question.id;
            var label = document.createElement('label');
            label.for = choice;
            label.innerHTML = choice;
            div.appendChild(radio);
            div.appendChild(label);
        });
        this.divQuestions.appendChild(div);
        var a = document.createElement('a');
        a.id="next";
        a.innerHTML = "next";
        a.href=`#${question.id}`;
        this.divQuestions.appendChild(a);
        console.log(question);
        a.addEventListener("click", nextQuestion);
    },
    next: function(game){
    }
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map