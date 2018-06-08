var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var randomNumbers = document.querySelector(".button");

// randomNumbers.addEventListener("click", function () {
// 	var numberOne = Math.floor(Math.random() * 255);
// 	var numberTwo = Math.floor(Math.random() * 255);
// 	var hexStringOne = numberOne.toString(16);
// 	var hexStringTwo = numberTwo.toString(16);
//
// 	color1.value = "#"+hexStringOne+hexStringTwo+hexStringOne;
// 	color2.value = "#"+hexStringTwo+hexStringOne+hexStringTwo;
// 	console.log("#"+hexStringOne+hexStringTwo+hexStringOne);
// 	console.log("#"+hexStringTwo+hexStringOne+hexStringTwo);
// })

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

// body.addEventListener("load", function () {
// 	console.log("saalskl");
// });

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
