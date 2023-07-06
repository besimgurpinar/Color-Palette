// Function to handle color addition
function addColor() {
  var colorInput = document.getElementById("color-input");
  var colorValue = colorInput.value;
  
  var colorBox = document.createElement("div");
  colorBox.classList.add("color-box");
  colorBox.style.backgroundColor = colorValue;
  
  var colorPalette = document.getElementById("color-palette");
  colorPalette.appendChild(colorBox);
  
  colorInput.value = "";
}

// Add event listener to the "Add Color" button
var addColorBtn = document.getElementById("add-color-btn");
addColorBtn.addEventListener("click", addColor);