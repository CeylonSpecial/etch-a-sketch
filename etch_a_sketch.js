function changeBackgroundColor(box) {
    box.setAttribute('style', 'background: black;');
    return;
}

function createNewSketchpad(size) {

    while (size > 100 || size < 1) {
        size = prompt("Please select a size from 0-100");
    }
    const grid = document.querySelector('#grid-container');

    removeAllChildNodes(grid);
    
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    i = 1;

    while(i <= (size**2)) {
        const box = document.createElement('div');
        box.classList.add('grid-item');
        grid.appendChild(box);
        i++;
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function etchASketch(size=16) {
    createNewSketchpad(size);
    
    const boxes = document.querySelectorAll('.grid-item');
    
    boxes.forEach(box => box.addEventListener('mouseover', () => {
        changeBackgroundColor(box);
    }))
}

etchASketch();

const button = document.querySelector('button');

button.addEventListener('click', () => {
    etchASketch(prompt("Please enter the size of your new sketchpad from 0-100 (e.g. 10 = 10x10 sketchpad)"));
});
