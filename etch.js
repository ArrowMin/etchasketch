

function addElement() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("cell")
    document.getElementById("mainDivContainer").appendChild(newDiv);
}

addElement();
console.log("Connected")

