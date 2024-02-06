const redInput = document.getElementById('redColor');
const greenInput = document.getElementById('greenColor');
const blueInput = document.getElementById('blueColor');
const boxColor = document.getElementById('boxColor');

redInput.addEventListener('change', changeColor);
greenInput.addEventListener('change', changeColor);
blueInput.addEventListener('change', changeColor);

function changeColor() {
    const redValue = redInput.value;
    const greenValue = greenInput.value;
    const blueValue = blueInput.value;

    if (redValue >= 0 && redValue <= 255 &&
        greenValue >= 0 && greenValue <= 255 &&
        blueValue >= 0 && blueValue <= 255) {

        const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

        boxColor.style.backgroundColor = color;
    } else {
        alert('Введите корректное значение');
    }
}
