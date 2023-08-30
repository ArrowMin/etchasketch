let dimension = 16;

function addRow() {
    // Create Row
    const cellRow = document.createElement("div");
    cellRow.classList.add("cellRow")
    document.getElementById("mainDivContainer").appendChild(cellRow);
    // Create Cells
    for (let i = 0; i < dimension; i++) {
        const cell = document.createElement("div");
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);;
        })
        cell.classList.add("cell");
        cellRow.appendChild(cell);
    }

}

document.querySelector(".btn").addEventListener("click", () => {
    let userInput = prompt("Please enter a number from 1-100");
    let num = parseInt(userInput);
    if (!Number.isInteger(num) || num <= 0 || num > 100) {
        dimension = 16;
    } else {
        dimension = num;
    }
    // Remove the current board
    const mainDivContainer = document.getElementById("mainDivContainer");
    while (mainDivContainer.firstChild) {
        mainDivContainer.removeChild(mainDivContainer.lastChild);
    }
    for (let i = 0; i < dimension; i++) {
        addRow();
    }
})

document.querySelector(".clrbtn").addEventListener("click", () => {
    const mainDivContainer = document.getElementById("mainDivContainer");
    while (mainDivContainer.firstChild) {
        mainDivContainer.removeChild(mainDivContainer.lastChild);
    }
    for (let i = 0; i < dimension; i++) {
        addRow();
    }
})

for (let i = 0; i < dimension; i++) {
    addRow();
}