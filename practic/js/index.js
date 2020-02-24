const box = document.querySelector('.box');
const box1 = document.querySelector('.box1');

function createArray(length) {
    let output = [];
    for (let i = 0; i < length; i++) {
        let tempColor1 = Math.floor(Math.random() * 256);
        let tempColor2 = Math.floor(Math.random() * 256);
        let tempColor3 = Math.floor(Math.random() * 256);
        let currentColor = `rgb(${tempColor1}, ${tempColor2}, ${tempColor3})`;
        output.push(currentColor);
    }
    return output;
}

const colorsArray = createArray(10);

setInterval(changeBackgroundColor(box, colorsArray), 2000);
box1.addEventListener('click', changeBackgroundColor(box1, colorsArray));


function changeBackgroundColor(el, arr) {
    let counter = 0;
    return function () {
        let currentColor = window.getComputedStyle(el).backgroundColor;
        if (!arr.includes(currentColor)) {
            el.style.backgroundColor = arr[0];
        } else {
            counter++;
            el.style.backgroundColor = arr[counter];
            if (counter >= arr.length) {
                el.style.backgroundColor = arr[0];
                counter = 0;
            }
        }
    }
}
