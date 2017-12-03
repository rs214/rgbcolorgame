var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
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
