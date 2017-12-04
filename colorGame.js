var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var currentColor = document.getElementById("currentColor");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setUpModeButtons();
  setUpSquares();
  reset();
}

function reset() {
  colors = generateRandomColors(numSquares);
  //pick new random color from array
  pickedColor = pickColor();
  //change color display to match new colors
  currentColor.textContent = pickedColor;
  //change colors of squares on the page
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i]
    }
    else{
      squares[i].style.display = "none";
    }
  };
  //get rid of h1 background color
  h1.style.backgroundColor = "steelblue";
  //reset text of button to New Colors
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
}

currentColor.textContent = pickedColor.toUpperCase();


resetButton.addEventListener("click", function() {
  reset();
})

function setUpModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
    });
  }
}

function setUpSquares() {
  for (var i = 0; i < squares.length; i++) {
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
}

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
