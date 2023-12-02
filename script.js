const createGrid = (size) => {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    for (let y = 0; y < size; y++) {
        const newCol = document.createElement('div');
        newCol.classList.add('col');
        for(let x = 0; x < size; x++) {
            const newBlock = document.createElement('div');
            newBlock.style.cssText = `height: calc(80vh / ${size})`;
            newBlock.classList.add('block');
            newBlock.addEventListener('mouseover', () => newBlock.classList.add('hovered'));
            newCol.appendChild(newBlock);
        }
        grid.appendChild(newCol);
    }
    document.body.appendChild(grid);
}

const sizeButton = document.querySelector('.inputButton');
const sizeInput  = document.querySelector('#sizeInput');
sizeButton.addEventListener('click', () => {
    console.log(sizeInput.value);
    if (parseInt(sizeInput.value) <= 100 && parseInt(sizeInput.value) > 0) {
        const newSize = parseInt(sizeInput.value);
        sizeInput.value = '';
        sizeInput.focus();
        document.body.removeChild(document.querySelector('.grid'));
        createGrid(newSize);
    } else {
        alert('Size must be under 100 and a positive number!')
    }
});

let actualSize = 16;
createGrid(actualSize);