// Walker Gross
// 3/6/19
// Web Dev 2
// Exam 2 


var answers = ["Make a Selection", "Baby", "Truck", "Ambulance", "Siren"];

form = document.getElementById('form');


button = document.getElementById('button');
point = document.getElementById('answer');

button.addEventListener("click", display)

function display(){
    form.innerHTML = "<h3>What does Wa-Wa mean in Puerto Rico?</h3>";
    form.innerHTML += "<ul id='list'></ul>";
    ol = document.getElementById('list');
    for (i = 0; i < answers.length; i++){
        ol.innerHTML += `<li>${answers[i]}</li>`;
    }
    form.innerHTML += "<select name='ans' id='ans'></select>";
    sel = document.getElementById('ans');
    for (i = 0; i < answers.length; i++){
        sel.innerHTML += `<option value='${i}'>${answers[i]}</option>`;
    }
    sel.addEventListener("change", answer);
}

function answer(){
    if (sel.value == 2){
        point.innerText = "Correct!";
    } else{
        point.innerText = "That is incorrect";
    }
}