let button = document.querySelector("button");

var colors = ['red' ,'blue' ,'black','green','#f45287c','pink' ,'yellow','#dfc546']

button.addEventListener("click" , changeColor);

function changeColor(){
    var ranc = colors[Math.round(Math.random() *colors.length)]; 
    let body = document.querySelector("body");
    body.style.background = ranc;
}