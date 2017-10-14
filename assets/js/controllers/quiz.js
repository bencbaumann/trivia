'use strict'
const questions = require('../models/questions');
module.exports = {
    position: 0,
    questions: questions,
    correct: 0,
    incorrect: 0,
    getQuestion: function(){
        return questions[this.position];
    }
}