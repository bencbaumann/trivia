module.exports = {
    divQuestions : document.getElementById('questions'),
    displayQuestion(question){
        var div = document.createElement('div');
        var h2 = document.createElement('h2');
        h2.innerHTML = question.question;
        div.appendChild(h2);
        divQuestions.appendChild(div);
        question.choices.forEach(function(element) {
            
        });
        console.log(question);
    }
}