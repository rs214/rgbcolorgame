var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var currentColor = document.getElementById("currentColor");
var messageDisplay = document.querySelector("#message");

currentColor.textContent = pickedColor.toUpperCase();

//style.backgroundColor works in all browsers
for (var i = 0; i < squares.length; i++) {
  //add initial color to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function () {
    //grab color of picked square and compare to picked color
    var clickedColor = this.style.backgroundColor;
    if (clickedColor !== pickedColor) {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
    else {
      messageDisplay.textContent = "Correct";
      changeColors(clickedColor);
    }
  });
}

function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  console.log(colors.length + 1)
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // goal: return an array of random colors
  //make array
  var randomColorsArray = [];
  //add num random colors to array
    for (var i = 0; i < num; i++) {
      randomColorsArray.push(randomColor())
    }
  //return array;
  return randomColorsArray;

}

function randomColor() {
  //pick red from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick green from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick blue from 0 - 255
  var b = Math.floor(Math.random() * 256);
  //synthesize into big string "rgb(r, g, b)"
  return `rgb(${r}, ${g}, ${b})`;
}
