/*Variables initializing*/

const parentBox = document.querySelector('.parent-box');
const submitBtn = document.getElementById('submit');
const intervalChangingBtn = document.getElementById('interval-changing');
const stopColorsChangingBtn = document.getElementById('stop-generating');
let timerId;
const boxCounter = 25;
const rgbValue = 255;

/*Listeners*/

submitBtn.addEventListener('click', generateBlocks);
intervalChangingBtn.addEventListener('click', generateBlocksInterval);
stopColorsChangingBtn.addEventListener('click', stopColorGenerating);

/*Functions*/

function generateBlocks() {
    parentBox.innerHTML = '';
    for (let i = 0; i < boxCounter; i++) {
        const box = document.createElement('div');
        box.classList.add('child-box');
        const bgColor = `rgb(${generateColor()}, ${generateColor()}, ${generateColor()})`;
        box.style.background = bgColor;
        parentBox.append(box);
    }
}

function generateBlocksInterval() {
    timerId = setInterval(generateBlocks, 1000);
}

function stopColorGenerating() {
    clearInterval(timerId);
}

function generateColor() {
    return Math.floor(Math.random() * (rgbValue + 1));
}

export {generateColor}