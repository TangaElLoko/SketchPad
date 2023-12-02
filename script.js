const grid = document.querySelector('.grid');

for (let y = 0; y < 16; y++) {
    const newCol = document.createElement('div');
    newCol.classList.add('col');

    for(let x = 0; x < 16; x++) {
        const newBlock = document.createElement('div');
        newBlock.classList.add('block');
        newBlock.addEventListener('mouseover', () => newBlock.classList.add('hovered'));
        newCol.appendChild(newBlock);
    }
    grid.appendChild(newCol);
}