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