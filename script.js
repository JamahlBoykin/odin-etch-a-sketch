const grid = document.querySelector('.grid');
createGrid();

function createGrid(gridSize = 16) {
  resetGrid();
  setDimensions(gridSize);
  createTiles(gridSize ** 2);
  addListeners();
}

function resetGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

function setDimensions(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function createTiles(tileCount) {
  for (let i = 0; i < (tileCount); i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    grid.appendChild(tile);
  }
}

function addListeners() {
  const tiles = document.querySelectorAll('.tile');
  tiles.forEach((tile) => {
    tile.addEventListener('mouseenter', () => {
      tile.style.backgroundColor = 'aqua';
    });
  });
}