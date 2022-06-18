// globals
const gridContainer = document.querySelector(".gridContainer");

//function to prompt user for grid size and create grid based on user prompt:
function createGridCells(gridSize) {
  gridSize = ~~prompt("How many rows/columns?");
  if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
    alert("Please enter a positive whole number integer less than 100");
    return createGridCells();
  }

  // apply css grid styling to grid container:
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gridContainer.appendChild(cell);
  }
}

// coloring & color pick function
function chooseColor() {
  const colorChoice = document.getElementById("color");
  console.log(colorChoice);
  colorChoice.addEventListener("input", chooseColor);
  gridContainer.addEventListener(
    "mouseover",
    (e) => (e.target.style.backgroundColor = `${colorChoice.value}`)
  );
}
function getRandomNumber() {
  let rVal = Math.floor(Math.random() * 255);
  let gVal = Math.floor(Math.random() * 255);
  let bVal = Math.floor(Math.random() * 255);
  let rgb =`rgb(${rVal},${gVal},${bVal})`;
  console.log(rgb);
  return rgb;
}
partyButton = document.querySelector(".party");
partyButton.addEventListener("click", startParty);
//party(rainbow color) function       NOT FINISHED !!!!!!!
function startParty() {
  rgb = getRandomNumber();
  gridContainer.addEventListener(
    "mouseover",
    (e) => (e.target.style.backgroundColor = getRandomNumber())
  );
}
//grid size change function (also resets grid)
function changeSize() {
  const sizeButton = document.querySelector("#sizeButton");
  sizeButton.addEventListener("click", resetDivs);
  sizeButton.addEventListener("click", resetGridColor);
  sizeButton.addEventListener("click", createGridCells);
}

//grid reset button
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", resetGridColor);

//grid color clear function
function resetGridColor() {
  gridContainer.childNodes.forEach(
    (child) => (child.style.backgroundColor = "#f0ffff")
  );
}
//removes old grid divs
function resetDivs() {
  document
    .querySelectorAll(".cell")
    .forEach((e) => e.parentNode.removeChild(e));
}

// calling functions
createGridCells();
chooseColor();
changeSize();