const dimension = 16;

function addRow() {
    // Create Row
    const cellRow = document.createElement("div");
    cellRow.classList.add("cellRow")
    document.getElementById("mainDivContainer").appendChild(cellRow);
    // Create Cell
    for (let i = 0; i < dimension; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cellRow.appendChild(cell);
    }

}

for (let i = 0; i < dimension; i++) {
    addRow();
}
