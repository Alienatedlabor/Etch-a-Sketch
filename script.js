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
// color pick function
function chooseColor() {
  const colorChoice = document.getElementById("color").value;
  gridContainer.addEventListener(
    "mouseover",
    (e) => (e.target.style.backgroundColor = `${colorChoice}`)
  );
}
//grid size change function
function changeSize(){
 const sizeButton = document.querySelector("#sizeButton");
sizeButton.addEventListener("click", createGridCells);
}
//grid reset button
//these don't work:       !!!!!!!!
const clearButton = document.querySelector("#clear");
  clearButton.addEventListener("click", resetGrid);
//grid reset function
function resetGrid(){
  gridContainer.style.backgroundColor = "#f0ffff";
}
// calling functions
createGridCells();
chooseColor();
changeSize();
resetGrid();
