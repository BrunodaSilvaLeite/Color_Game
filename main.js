let rightColor;
let colors = [];
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("color-display");
const messageDisplay = document.getElementById("message");
const resetButton = document.getElementById("reset");

messageDisplay.addEventListener("click", () => {
  tryAgain();
});
resetButton.addEventListener("click", () => {
  newColor();
});

function passColorToArray() {
  for (i = 0; i < squares.length; i++) {
    colors.push(generateRgbNumber());
  }
  setRightColor();
}

function generateRgbNumber() {
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function setRightColor() {
  rightColor = colors[Math.floor(Math.random() * 6)];
  colorDisplay.innerHTML = rightColor;
  passColorToDiv();
}

function passColorToDiv() {
  for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
}

for (i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", (event) => {
    const colorAndDiv = [event.target.style.backgroundColor , event.target]
    checkRightColor(...colorAndDiv);
  });
}

function checkRightColor(rgbdiv, Div) {
  if (rightColor === rgbdiv) {
    colorDisplay.innerHTML = "Acertouuuuu";
    changeColors(divColor);
  } else {
    Div.style.backgroundColor = "#232323";
    messageDisplay.textContent = "try again";
  }
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function newColor() {
  colors = [];
  passColorToArray();
}

function tryAgain() {
  passColorToDiv();
}

passColorToArray();
/* function containerColor(color) {
    for(i = 0 ; i < squares.length ; i++) {
        squares[i].style.background = arr[i];
    
        squares[i].addEventListener('click', function() {
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === color){
                colorDisplay.innerHTML = "ACERTOUUU !!!"
                changeColors(clickedColor);
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "try again";
            }
        })
    }
    
} 
function changeColors(color) {
for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
}
}

function genRandomColors() {

for (var i = 0; i < 6; i++) {
    arr.push(makeColor());
    
}
pickedColor(arr)

}

function makeColor() {
var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
return "rgb(" + r + ", " + g + ", " + b + ")"; 
}


async function pickedColor (colors) {

var numberColorRight = Math.floor(Math.random() * 6);
var rightColor = (colors[numberColorRight])
colorDisplay.innerHTML = rightColor ;
containerColor(rightColor)
}

genRandomColors() */