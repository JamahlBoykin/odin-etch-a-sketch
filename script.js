const grid = document.querySelector('.grid');
const input = document.querySelector('.input-box');
const dimensions = document.querySelector('.dimensions');
const upArrow = document.querySelector('.up-button');
const downArrow = document.querySelector('.down-button');
const rainbow = document.querySelector('.rainbow');
const gridlines = document.querySelector('input[name=gridlines]')

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

gridlines.addEventListener('change', () => {
  if (gridlines.checked) {
    grid.style.gap = "1px";
  } else {
    grid.style.gap = "0px";
  }
});

rainbow.addEventListener('click', () => {
  if (rainbow.classList.contains('active')) {
    rainbow.classList.remove('active');
  } else {
    rainbow.classList.add('active');
  }
});

input.addEventListener("input", resize);

resize();

function resize() {
  if (Number(input.value) < 1) {
    input.value = 1;
  } else if (Number(input.value) > 100) {
    input.value = 100;
  }
  dimensions.textContent = input.value + " x";
  input.style.width = dimensions.offsetWidth - 15 + "px";
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

function getRandomColor() {
  return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function addListeners() {
  const tiles = document.querySelectorAll('.tile');
  tiles.forEach((tile) => {
    tile.addEventListener('mousedown', () => {
      if (rainbow.classList.contains('active')) {
        console.log('test');
        tile.style.backgroundColor = getRandomColor();
      } else {
        tile.style.backgroundColor = 'white';
      }
    });
    tile.addEventListener('mouseenter', (e) => {
      if (e.buttons === 1) {
        if (rainbow.classList.contains('active')) {
          console.log('test');
          tile.style.backgroundColor = getRandomColor();
        } else {
          tile.style.backgroundColor = 'white';
        }
      }
    });
  });
}