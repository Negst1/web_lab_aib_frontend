function changeColor(color) {
    document.body.style.backgroundColor = color
}

const redButton = document.getElementById('redButton');
const greenButton = document.getElementById('greenButton');
const blueButton = document.getElementById('blueButton');

redButton.addEventListener('click', () => changeColor('red'));
greenButton.addEventListener('click', () => changeColor('green'));
blueButton.addEventListener('click', () => changeColor('blue'));


