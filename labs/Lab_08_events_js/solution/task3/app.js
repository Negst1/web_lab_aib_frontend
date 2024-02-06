const redInput = document.getElementById('redColor');
const greenInput = document.getElementById('greenColor');
const blueInput = document.getElementById('blueColor');
const boxArray = document.getElementById('boxArray');
const pressButton = document.getElementById('btn');
const mainPalette = document.getElementById('boxColor');

redInput.addEventListener('input', changeColor);
greenInput.addEventListener('input', changeColor);
blueInput.addEventListener('input', changeColor);
pressButton.addEventListener('click', addNewBlock);

function getSavedColor() {
    return localStorage.getItem('savedColor');
}

function applyColorToElement(element, color) {
    element.style.backgroundColor = color;
}

function changeBlockColor(event) {
    const clickedBlockColor = event.target.style.backgroundColor;
    
    if (clickedBlockColor) {
        localStorage.setItem('savedColor', clickedBlockColor);
        applyColorToElement(mainPalette, clickedBlockColor);
    }
}

mainPalette.addEventListener('click', changeBlockColor);

function changeColor() {
    const redValue = redInput.value;
    const greenValue = greenInput.value;
    const blueValue = blueInput.value;

    if (redValue >= 0 && redValue <= 255 &&
        greenValue >= 0 && greenValue <= 255 &&
        blueValue >= 0 && blueValue <= 255) {

        const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

        applyColorToElement(mainPalette, color);
    } else {
        alert('Введите корректное значение');
    }
}

function addNewBlock() {
    const redValue = redInput.value;
    const greenValue = greenInput.value;
    const blueValue = blueInput.value;

    if (redValue >= 0 && redValue <= 255 &&
        greenValue >= 0 && greenValue <= 255 &&
        blueValue >= 0 && blueValue <= 255) {

        const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

        const newBlock = document.createElement('div');
        newBlock.classList.add('blockColor');
        newBlock.style.backgroundColor = color;

        newBlock.addEventListener('click', changeBlockColor);

        boxArray.insertBefore(newBlock, boxArray.firstChild);

        if (boxArray.children.length >= 15) {
            boxArray.removeChild(boxArray.lastChild);
        }
    }
}
