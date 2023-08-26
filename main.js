
let units = document.querySelector('div');
let gridSize = 16;
for(let i = 0; i < gridSize; i++){
    for(let j = 0; j < gridSize; j++){
    
        let unit = document.createElement('div');
        unit.classList.add('unit');
        unit.setAttribute('style', `width:${window.innerWidth / gridSize}px;`);
        unit.setAttribute('style', `height:${window.innerHeight / gridSize}px;`);
        console.log(window.innerHeight / gridSize)
        units.appendChild(unit);
    }


    
}


