const grid = document.querySelector('.grid');
const input = document.querySelector('.input-box');
const dimensions = document.querySelector('.dimensions');
const upArrow = document.querySelector('.up-button');
const downArrow = document.querySelector('.down-button');

upArrow.addEventListener('click', () => {
  if (input.value != 100) {
    input.value++;
    resize();
  }
});

downArrow.addEventListener('click', () => {
  if (input.value != 1) {
    input.value--;
    resize();
  }
});

resize();
input.addEventListener("input", resize);

function resize() {
  if (Number(input.value) < 1) {
    input.value = 1;
  } else if (Number(input.value) > 100) {
    input.value = 100;
  }
  dimensions.textContent = "x " + input.value;
  input.style.width = dimensions.offsetWidth - 5 + "px";
  createGrid(Number(input.value));
}

function createGrid(gridSize) {
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