let container = document.getElementById("wrapper");
let size = document.getElementById("sizeRange");
let allButtons = document.querySelector('.topSelectors')
let box = document.getElementById("wrapper").children;
let rainbowButton = document.getElementById("rainbow");
let userColor = document.getElementById("color");
let allColor = document.getElementById("allCol");
let cleaner = document.getElementById("cleaner");
let resetButton = document.querySelector("#reset");
let toggleGrid = document.querySelector("#gridLine");



function createGrid() {
    container.innerHTML = ""
    let gridval = document.getElementById("gridval");
    let gridSize = size.value
    let gridBoxes = gridSize * gridSize;
    gridval.innerHTML = gridSize;
    container.style.display = "grid"
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    container.style.gridTemplateRows = `repeat(${gridSize},1fr)`

    for(let i = 0; i < gridBoxes; i++) {
        let cell = document.createElement("div");
        cell.classList.add("square")
        let opacity = .2
        cell.addEventListener ("mouseenter", function(){
            cell.style.background = "rgba(0,0,0,"+opacity+")";
            opacity +=.2
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
        item.classList.toggle("gridLines")
    }
}


size.addEventListener("click", createGrid)
rainbowButton.addEventListener("click", rainbowColors);
cleaner.addEventListener("click", eraser);
userColor.addEventListener("click", colorChoice);
allColor.addEventListener("click", randomColors);
resetButton.addEventListener("click", reset);
toggleGrid.addEventListener("click", toggleLine);
rainbowButton.addEventListener("click", rainbowColors)