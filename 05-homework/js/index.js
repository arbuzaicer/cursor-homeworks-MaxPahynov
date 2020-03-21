/*Imports*/

import {
    getRandomArray,
    getModa,
    getAverage,
    getMedian,
    filterEvenNumbers,
    countPositiveNumbers,
    getDividedByFive,
    replaceBadWords,
    divideByThree,
    generateCombinations
} from '../js/functions.js'

/*Buttons initializing*/

const inputField = document.querySelector('.input-field');
const getRandomArrayBtn = document.getElementById('getRandomArray');
const getModaBtn = document.getElementById('getModa');
const getAverageBtn = document.getElementById('getAverage');
const getMedianBtn = document.getElementById('getMedian');
const filterEvenNumbersBtn = document.getElementById('filterEvenNumbers');
const countPositiveNumbersBtn = document.getElementById('countPositiveNumbers');
const getDividedByFiveBtn = document.getElementById('getDividedByFive');
const replaceBadWordsBtn = document.getElementById('replaceBadWords');
const divideByThreeBtn = document.getElementById('divideByThree');
const generateCombinationsBtn = document.getElementById('generateCombinations');

/*Handlers functions*/

getRandomArrayBtn.addEventListener('click', () => {
    show();
    createThreeInput();
});

getModaBtn.addEventListener('click', () => {
    show();
    createOneInput(getModa,
        'Введіть через кому довільну кількість цифр',
        document.getElementById('content-section__2'),
        document.getElementById('result-block__2'),
        true);
});

getAverageBtn.addEventListener('click', () => {
    show();
    createOneInput(getAverage,
        'Введіть через кому довільну кількість цифр',
        document.getElementById('content-section__3'),
        document.getElementById('result-block__3'),
        true);
});

getMedianBtn.addEventListener('click', () => {
    show();
    createOneInput(getMedian,
        'Введіть через кому довільну кількість цифр',
        document.getElementById('content-section__4'),
        document.getElementById('result-block__4'),
        true);
});

filterEvenNumbersBtn.addEventListener('click', () => {
    show();
    createOneInput(filterEvenNumbers,
        'Введіть через кому довільну кількість цифр',
        document.getElementById('content-section__5'),
        document.getElementById('result-block__5'),
        true);
});

countPositiveNumbersBtn.addEventListener('click', () => {
    show();
    createOneInput(countPositiveNumbers,
        'Введіть через кому довільну кількість цифр',
        document.getElementById('content-section__6'),
        document.getElementById('result-block__6'),
        true);
});

getDividedByFiveBtn.addEventListener('click', () => {
    show();
    createOneInput(getDividedByFive,
        'Введіть через кому довільну кількість цифр',
        document.getElementById('content-section__7'),
        document.getElementById('result-block__7'),
        true);
});

replaceBadWordsBtn.addEventListener('click', () => {
    show();
    createOneInput(replaceBadWords,
        'Введіть будь яку фразу з поганим словом...',
        document.getElementById('content-section__8'),
        document.getElementById('result-block__8'),
        false);
});

divideByThreeBtn.addEventListener('click', () => {
    show();
    createOneInput(divideByThree,
        'Введіть будь-яке число або фразу',
        document.getElementById('content-section__9'),
        document.getElementById('result-block__9'),
        false);
});

generateCombinationsBtn.addEventListener('click', () => {
    show();
    createOneInput(generateCombinations,
        'Введіть будь-яке слово...',
        document.getElementById('content-section__10'),
        document.getElementById('result-block__10'),
        false);
});

/*Create elements section*/

function createOneInput(func, placeholder, el, el2, flag) {
    const inputSection = document.createElement('div');
    inputSection.classList.add('input-section');
    const input = document.createElement('input');
    input.placeholder = placeholder;
    input.classList.add('input-arguments');

    const calculateBtn = document.createElement('button');
    calculateBtn.textContent = 'Розрахувати';
    calculateBtn.classList.add('btn-calculate');

    inputSection.appendChild(input);
    inputSection.appendChild(calculateBtn);
    inputField.appendChild(inputSection);

    calculateBtn.addEventListener('click', () => {
        el2.innerHTML = '';
        const inputResult = flag === true ? input.value.split(',').map(item => Number(item)) : input.value;
        const description = document.createElement('p');
        description.textContent = `Для розрахунку введено дані: ${inputResult}`;
        const result = document.createElement('p');
        result.textContent = `Результат: ${func(inputResult)}`;
        result.classList.add('result');
        el2.appendChild(description);
        el2.appendChild(result);
        successCalculation();
        inputSection.innerHTML = '';
        hide();
    })
}

function createThreeInput() {
    const inputSection = document.createElement('div');
    inputSection.classList.add('input-section');

    const input1 = document.createElement('input');
    input1.placeholder = 'Введіть довжину масиву';
    input1.classList.add('input-arguments');

    const input2 = document.createElement('input');
    input2.placeholder = 'Мінімальне значення інтервалу';
    input2.classList.add('input-arguments');

    const input3 = document.createElement('input');
    input3.placeholder = 'Максимальне значення інтервалу';
    input3.classList.add('input-arguments');

    const calculateBtn = document.createElement('button');
    calculateBtn.textContent = 'Розрахувати';
    calculateBtn.classList.add('btn-calculate');

    inputSection.appendChild(input1);
    inputSection.appendChild(input2);
    inputSection.appendChild(input3);
    inputSection.appendChild(calculateBtn);
    inputField.appendChild(inputSection);

    calculateBtn.addEventListener('click', () => {
        document.getElementById('result-block__1').innerHTML = '';
        const description = document.createElement('p');
        description.textContent = `Для розрахунку введено дані: 
        довжина масиву ${input1.value};
        мін. значення ${input2.value};
        макс. значення ${input3.value}`;
        const result = document.createElement('p');
        result.classList.add('result');
        result.textContent = `Результат: [${getRandomArray(Number(input1.value), Number(input2.value), Number(input3.value))}]`;
        document.getElementById('result-block__1').appendChild(description);
        document.getElementById('result-block__1').appendChild(result);
        successCalculation();
        inputSection.innerHTML = '';
        hide();
    })
}

/*Input Field Section Handlers*/
function hide() {
    inputField.style.top = '-200%';
}

function show() {
    inputField.style.top = '0';
    clear();
    addCloseBtn();
}

function clear() {
    inputField.innerHTML = '';
}

function successCalculation() {
    alert('Функція порахована - наведіться знову на блок в якому ви викликали функцію!');
}

function addCloseBtn() {
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close');
    closeBtn.textContent = 'close';
    inputField.appendChild(closeBtn);

    closeBtn.addEventListener('click', () => {
        hide()
    })
}