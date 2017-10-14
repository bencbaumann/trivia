'use strict'
const questions = require('../models/questions');
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