



let canvas = document.querySelector('.canvas-container');
let mainContainer = document.querySelector('.container');
let input = document.querySelector("#input");
let clearButton = document.querySelector('button');
let colorfulSwitch = document.querySelector('#rainbow');
let gridSize = input.value;


drawGridSize(gridSize);
drawCanvas(gridSize);



clearButton.addEventListener('click', function(){
    drawCanvas(gridSize);
});

input.addEventListener("input",function(){
    gridSize = this.value;
    drawGridSize(gridSize);
    drawCanvas(gridSize);
},0);



function drawCanvas(gridSize){
    canvas.innerHTML="";
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
}

function drawGridSize(gridSize)
{
    let sizeText = document.querySelector('h2');
    sizeText.innerText = `GridSize: ${gridSize}`;
}

//Shading square in
function fillIn(e)
{
    if(colorfulSwitch.checked)
    {
      this.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},
                                        ${Math.floor(Math.random() * 255)},
                                        ${Math.floor(Math.random() * 255)})`;
    }
    this.classList.add('filled');
}


function drawColorful(e){
    this.checked = !this.checked;
}

