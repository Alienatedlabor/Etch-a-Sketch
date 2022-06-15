const gridContainer = document.querySelector(".gridContainer");

function createGridCells(gridSize) {
  gridSize = ~~prompt("How many rows/columns?");
  console.log(gridSize);
  if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
    alert("Please enter a positive whole number integer less than 250");
    return createGridCells();
  }
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell")
    gridContainer.appendChild(cell);
  }
  
  
}
// calling functions
createGridCells();
