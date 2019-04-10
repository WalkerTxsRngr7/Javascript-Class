document.write("<footer>My Footer</footer>");

function myFunction(){
    alert("Press the red button");
}
myButton = document.getElementById("butt1");
myButton.addEventListener("click", myFunction);

txtBox = document.getElementById('myText');
txtBox.addEventListener("focus", newFunction);

function newFunction(){
    document.getElementById('myText').style.backgroundColor = "pink";
}

txtBox .addEventListener("click", function(){
    document.getElementById('myText').style.backgroundColor = "green";
})