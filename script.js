const grid = document.querySelector('.grid');

for (let i = 0; i < (16*16); i++) {
  const tile = document.createElement('div');
  tile.classList.add('tile');
  grid.appendChild(tile);
}

const tiles = document.querySelectorAll('.tile');
tiles.forEach((tile) => {
  tile.addEventListener('mouseenter', () => {
    tile.style.backgroundColor = 'aqua';
  });
});