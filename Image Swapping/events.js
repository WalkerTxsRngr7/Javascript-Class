var images = [["croft.jpg", "Lara Croft"], ["dishonored2.jpg", "Emily Kaldwin"], ["dva.jpg", "D.Va"], ["ellie.png", "Ellie"]];

var myTimer = setInterval(mainPic, 1000);
var picDesc = document.getElementById("picDesc");
var randColor = ["red", "blue", "green", "orange", "black", "pink", "purple"];

function mainPic(){
    randomNumber = Math.floor(Math.random() * 4);
    randomNumber2 = Math.floor(Math.random() * 7);
    document.getElementById('picDesc').innerText = images[randomNumber][1];
    picDesc.style.color = randColor[randomNumber2];
    document.getElementById('mainPic').innerHTML = "<img width='300' height='300' src='" + images[randomNumber][0] + "'>";

}


function picSelect(event){
    imgsrc =  
    randomNumber2 = Math.floor(Math.random() * 7);
    document.getElementById('picDesc').innerText = event.target.alt;
    picDesc.style.color = randColor[randomNumber2];
    document.getElementById('mainPic').innerHTML = "<img width='300' height='300' src='" + event.target.src + "'>";
    clearInterval(myTimer);
};




for (i = 0; i < images.length; i++) {
    document.getElementById('picBar').innerHTML += `<img src="${images[i][0]}" alt="${images[i][1]}" class="thumbnail"></img>`;
}