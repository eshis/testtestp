var CSS = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
CSS.textContent = body.style.background + ";";

function setGradient () {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	CSS.textContent = body.style.background + ";";
}

function mixItUp () {
	color1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	color2.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	setGradient();
}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

button.addEventListener("click", mixItUp)