let container = document.getElementById("wrapper");
let box = document.getElementById("wrapper").children;
let size = document.getElementById("sizeRange");
let rainbowButton = document.getElementById("rainbow");
let userColor = document.getElementById("color");
let allColor = document.getElementById("allCol");
let cleaner = document.getElementById("cleaner");
let resetButton = document.querySelector("#reset");
let toggleGrid = document.querySelector("#gridLine");
// let slider = document.querySelector(".slider")



function createGrid() {
    container.innerHTML = ""
    
    let gridval = document.getElementById("gridval");
    function aa() {
        return size.value
    }
    gridval.innerHTML = aa()

    let gridCells = size.value;
    let gridPopulation = gridCells * gridCells;
    container.style.gridTemplateColumns = `repeat(${gridCells}, 1fr)`
    container.style.gridTemplateRows = `repeat(${gridCells},1fr)`

    for(let i = 0; i < gridPopulation; i++) {
        let cell = document.createElement("div");
        cell.classList.add("square")
        cell.addEventListener ("mouseenter", function(){
            cell.style.background = "black"
        })
        container.appendChild(cell);
    }
    
}

createGrid()

function eraser() {
    for(let item of box) {
        item.addEventListener("mouseenter", function() {
            item.style.backgroundColor = ""
        })
    }
    
}
function colorChoice() {
    for(let prop of box) {
        prop.addEventListener("mouseenter", function() {
            prop.style.backgroundColor = userColor.value ;
        })
    }
}
function randomColors() {
    
    function red() {
        return Math.floor(Math.random() * 255)
    }
    function green() {
        return Math.floor(Math.random() * 255)
    }

    function blue() {
        return Math.floor(Math.random() * 255)
    }
    for (const element of box) {
        element.addEventListener("mouseenter", function(){
            element.style.backgroundColor = `rgb(${red()}, ${green()}, ${blue()} )`
        })
    }
}

function rainbowColors() {
    let rainbow = ["red", "orange", "yellow", "green", " blue", "indigo", "violet"]
    function i() {
        let i = Math.floor(Math.random() * 7);
        return i
    } 
    for(let item of box) {
        item.addEventListener("mouseenter", function(){
            item.style.backgroundColor = rainbow[i()]
        })
    }
}


function reset() {
    for(let items of box) {
        items.style.backgroundColor = ""
    }
}
function toggleLine() {
    for(let item of box) {
        item.classList.remove('square')
        item.classList.toggle("gridLines")
    }
}


size.addEventListener("mouseup", createGrid)
rainbowButton.addEventListener("click", rainbowColors);
cleaner.addEventListener("mousedown", eraser);
userColor.addEventListener("click", colorChoice);
allColor.addEventListener("click", randomColors);
resetButton.addEventListener("click", reset);
toggleGrid.addEventListener("click", toggleLine);
rainbowButton.addEventListener("click", rainbowColors)