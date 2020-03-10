import {getRandomChinese} from './promises.js'
import inputValidation from './validation.js'

/*Variables initializing*/

const wordLengthInput = document.getElementById('word-length');
const submitBtn = document.getElementById('submit');
const timeOutInput = document.getElementById('set-timeout');
const closeBtn = document.querySelector('.rules-open');
const rulesLoader = document.querySelector('.cssload-box-loading');
const rulesDescription = document.querySelector('.rules-description');

/*Listeners*/

closeBtn.addEventListener('click', function (event) {
    if (event.target.classList.contains('cssload-box-loading')) {
        rulesHandler(
            {el: closeBtn, className: 'rules-close'},
            {el: rulesLoader, className: 'hide'},
            {el: rulesDescription, className: 'hide'}
        )
    }
    if (event.target.classList.contains('rules-close')) {
        rulesHandler(
            {el: closeBtn, className: 'rules-close'},
            {el: rulesLoader, className: 'hide'},
            {el: rulesDescription, className: 'hide'}
        )
    }
});

window.addEventListener('keyup', function (event) {
    if(event.code === "Escape") {
        rulesHandler(
            {el: closeBtn, className: 'rules-close'},
            {el: rulesLoader, className: 'hide'},
            {el: rulesDescription, className: 'hide'}
        )
    }
});

submitBtn.addEventListener('click', insertChineseWord);

/*Private functions*/

function rulesHandler() {
    const toggledElements = Array.from(arguments);
    toggledElements.forEach(elem => {
        elem.el.classList.toggle(elem.className)
    })
}

function insertChineseWord() {
    const length = Number(wordLengthInput.value);
    const time = Number(timeOutInput.value);
    if (!inputValidation(length, time)) {
        return;
    }
    getRandomChinese(length, time).then(data => {
        if (document.querySelector('.result')) {
            document.body.removeChild(document.querySelector('.result'))
        }
        const result = document.createElement('h1');
        result.classList.add('result');
        result.textContent = data;
        document.body.appendChild(result);
    });
}