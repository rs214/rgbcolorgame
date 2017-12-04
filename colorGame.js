var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var currentColor = document.getElementById("currentColor");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

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
      resetButton.textContent = "Play Again";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    }
  });
}

easyBtn.addEventListener("click", function () {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  currentColor.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.background = colors[i];
    }
    else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function () {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  currentColor.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function() {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick new random color from array
  pickedColor = pickColor();
  //change color display to match new colors
  currentColor.textContent = pickedColor;
  //change colors of squares on the page
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  //get rid of h1 background color
  h1.style.backgroundColor = "steelblue";
  //reset text of button to New Colors
  resetButton.textContent = "New Colors";
})

function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // goal: return an array of random colors
  //make array
  var arr = [];
  //add num random colors to array
    for (var i = 0; i < num; i++) {
      arr.push(randomColor())
    }
  //return array;
  return arr;

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
