
// var rossLoop = setInterval(rossRun, 200);
var finished = false;
var position = 0;
var position2 = 0;
var seconds = 0;
cleat = document.getElementById('cleat');
sneaker = document.getElementById('sneaker');
bolt = document.getElementById('bolt');
ross = document.getElementById('ross');
gun = document.getElementById('gun');
winner = document.getElementById('winner');
score = document.getElementById('score');
var boltLoop;
var rossLoop;
var timer;

reset();


winner.addEventListener("click", reset);



function start(shoe) {
    gun.src = "gunstart.png";
    if (shoe == 'cleat'){
        boltLoop = setInterval(boltRun, 15);
    } else {
        boltLoop = setInterval(boltRun, 17);
    }
    rossLoop = setInterval(rossRun, 17);
    timer = setInterval(time, 10)
    
}

function time(){
    seconds += 1;
}

function boltRun() {
    if (finished != true){
            randNum = Math.ceil(Math.random() * 5);
            
            if(position < 1500){
                position += (randNum * 2);
                bolt.style.left = position + "px";
            } else {
                finished = true;
                winner.src = "boltWin.jpg";
                score.innerText = seconds / 100;
            }
    }
}

function rossRun(){
    if (finished != true) {
        randNum = Math.ceil(Math.random() * 5);
        // run(ross);

        if(position2 < 1500){
            position2 += (randNum * 2);
            ross.style.left = position2 + "px";
            
        } else {
            finished = true;
            winner.src = "rossWin.jpg";
            score.innerText = seconds / 100;
        }
    }
}

function reset(){
    gun.src = "gun.png";
    winner.src = "";
    position = 0;
    position2 = 0;
    bolt.style.left = position + "px";
    ross.style.left = position2 + "px";
    seconds = 0;
    clearInterval(boltLoop);
    clearInterval(rossLoop);
    clearInterval(timer);
    score.innerText = "";
    finished = false;
}