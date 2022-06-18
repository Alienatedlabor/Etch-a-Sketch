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

// coloring & color pick function  PICK DOESNT WORK !!!!!!!-  need to use onInput to update but can't quite figure it out
function chooseColor() {
  const colorChoice = document.getElementById("color").value;
  gridContainer.addEventListener(
    "mouseover",
    (e) => (e.target.style.backgroundColor = `${colorChoice}`)
  );
}
//party(rainbow color) function       NOT FINISHED !!!!!!!
function startParty() {
  partyButton = document.querySelector(".party");
  partyButton.addEventListener("click", startParty);
  //need a random number for either hsl or rgb values
  function getRandomNumber(){
  //  Math.floor(math.random()* somethingidkwhat)
  }
}
//grid size change function (also resets grid)       WEIRD COLORED DIVS AT BOTTOM EVEN AFTER RESET!!!!!!!!
function changeSize() {
  const sizeButton = document.querySelector("#sizeButton");
  sizeButton.addEventListener("click", createGridCells);
  sizeButton.addEventListener("click", resetGrid);
}

//grid reset button
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", resetGrid);

//grid reset function
function resetGrid() {
  gridContainer.childNodes.forEach(
    (child) => (child.style.backgroundColor = "#f0ffff")
  );
}

// calling functions
createGridCells();
chooseColor();
changeSize();
resetGrid();
startParty();
