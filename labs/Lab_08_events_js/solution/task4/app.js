const redInput = document.getElementById('redColor');
const greenInput = document.getElementById('greenColor');
const blueInput = document.getElementById('blueColor');
const boxArray = document.getElementById('boxArray');
const pressButton = document.getElementById('btn');
const mainPalette = document.getElementById('boxColor');

// Обработчики событий для изменения цвета и сохранения в localStorage
redInput.addEventListener('input', changeColor);
greenInput.addEventListener('input', changeColor);
blueInput.addEventListener('input', changeColor);
pressButton.addEventListener('click', addNewBlock);

// Получение сохраненного цвета из localStorage
function getSavedColor() {
    return localStorage.getItem('savedColor');
}

// Функция для применения цвета к элементу
function applyColorToElement(element, color) {
    element.style.backgroundColor = color;
}

// Функция для изменения фона по клику на блок
function changeBlockColor(event) {
    const clickedBlockColor = event.target.style.backgroundColor;
    
    if (clickedBlockColor) {
        localStorage.setItem('savedColor', clickedBlockColor);
        applyColorToElement(mainPalette, clickedBlockColor);
        // Дополнительные действия при изменении цвета других элементов
    }
}

// Обработчик события для блока с сохраненным цветом
mainPalette.addEventListener('click', changeBlockColor);

// Функция изменения цвета при вводе значений
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

// Функция добавления нового блока
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

        // Добавление обработчика события для нового блока
        newBlock.addEventListener('click', changeBlockColor);

        boxArray.insertBefore(newBlock, boxArray.firstChild);

        if (boxArray.children.length > 15) {
            boxArray.removeChild(boxArray.lastChild);
        }
    }
}
