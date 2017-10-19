'use strict'
var nodelist2array = require('../lib/nodelist2array');
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