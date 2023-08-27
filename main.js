
let units = document.querySelector('.canvas-container');
let gridSize = 4;
for(let i = 0; i < gridSize; i++){
    let row = document.createElement('div');
    row.classList.add('unit-row');
    for(let j = 0; j < gridSize; j++){
    
        let unit = document.createElement('div');
        unit.classList.add('unit');
        row.appendChild(unit);
    }
    units.appendChild(row);


    
}


