const gridContainer = document.getElementsByClassName("gridContainer");

function createGridSize(gridSize) {
  gridSize = ~~prompt("how many rows/columns?");
  console.log(gridSize);
  if (isNaN(gridSize) || gridSize < 1 || gridSize > 250) {
    alert("please enter a positive whole number integer less than 250");
    return createGridSize();
  }
  console.log(typeof gridSize);
  console.log(gridSize);
  return gridSize;
}

function createGridCells(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const cell = document.createElement("div");
    gridContainer.appendChild(cell);
    cell.style.border = "1px solid black";
  }
}
// calling functions
createGridSize();
createGridCells();
