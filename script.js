const containerEl = document.querySelector(".container");
for (let index = 0; index < 32; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color");
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color");

function randomColor(){
    const symbols = "0123456789abcdef";
    let colorCode = "";
    let colorCodeLenght = 6;
    for (let index = 0; index < colorCodeLenght; index++) {
        const randomNum = Math.floor(Math.random() * symbols.length);
        colorCode += symbols.substring(randomNum, randomNum+1);
    }
    return colorCode;
}
function generateColor(){
    colorContainerEls.forEach((color)=>{
        const newColor = randomColor();
        color.style.backgroundColor = "#" + newColor;
        color.innerHTML = "#" + newColor;
    })

}
generateColor();
