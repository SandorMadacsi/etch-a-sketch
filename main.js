


let canvas = document.querySelector('.canvas-container');
let mainContainer = document.querySelector('.container');
let gridSize = 100;

let sizeText = document.querySelector('h2');
sizeText.innerText = `GridSize: ${gridSize}`;


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


let units = document.querySelectorAll('.unit');
units.forEach(unit =>  unit.addEventListener('mouseover', fillIn));


//Shading square in
function fillIn(e)
{
    this.classList.add('filled');
}

