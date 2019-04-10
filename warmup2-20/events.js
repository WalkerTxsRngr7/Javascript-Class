
//warmup create a click event for the h1 tag that changes the color of the font
var h1tag = document.getElementById("color");

h1tag.addEventListener("click", () =>{
    h1tag.style.color = "red";

    //introduce the innerHTML property
    h1tag.innerHTML = "My World is Read";

});

var felonies = ["assault", "gta", "possesion"];

// document.getElementById('but1').addEventListener("click", addItems);
// add the window load event
window.addEventListener("load", addItems);

function addItems(){
    taskList = document.getElementById('list');
    for (var i = 0; i < felonies.length; i++){
        taskList.innerHTML += "<li>" + felonies[i] + "</li>";
    }
}

var myTimer;

// Create a timer
document.getElementById('start').addEventListener("click", () => {
    myTimer = setInterval(genRanNum, 1000);
});

function genRanNum(){
    randomNumber = Math.ceil(Math.random() * 10);
    document.getElementById('ranNum').innerHTML += randomNumber + "</br>";
}


//create a button that stops the setInterval
document.getElementById('stop').addEventListener("click", () => {
    clearInterval(myTimer);
    document.getElementById('ranNum').innerHTML = "Stopped!";
});