var color = "blue";

function changeColor() {
  var anotherColor = "red";
  
  function swapColors() {
    var tempColor = anotherColor;
    anotherColor = color;
    color = tempColor;
  }
  
  swapColors();
  console.log("changeColor: color=" + color);
  console.log("changeColor: anotherColor=" + anotherColor);
}

changeColor();
console.log("global: color=" + color);