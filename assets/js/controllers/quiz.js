'use strict'
const questions = require('../models/questions');
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