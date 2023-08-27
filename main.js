

//
let canvas = document.querySelector('.canvas-container');

let gridSize = 100;
for(let i = 0; i < gridSize; i++){
    let row = document.createElement('div');
    row.classList.add('unit-row');
    for(let j = 0; j < gridSize; j++){
    
        let unit = document.createElement('div');
        unit.classList.add('unit');
        unit.setAttribute('style', `width: ${canvas.clientWidth / gridSize}px;
                                    height: ${canvas.clientHeight / gridSize}px;`);
        row.appendChild(unit);
    }
    canvas.appendChild(row);
}


