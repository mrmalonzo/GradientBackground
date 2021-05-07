var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var CSS = document.querySelector("h3");
var background = document.getElementById("gradient");


function addToColor(){
	background.style.background = "linear-gradient(to right, " + color1.value +"," + color2.value +")";
	
	CSS.textContent = background.style.background + ";"; //print the background color as a text
		//text content if you just want to change the text content
} //innerHTML, createTextNode, textContent

color1.addEventListener("input", addToColor);
color2.addEventListener("input", addToColor);