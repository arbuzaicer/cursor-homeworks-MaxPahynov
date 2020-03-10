import {getRandomChinese} from './promises.js'
import inputValidation from './validation.js'

/*Variables initializing*/

const wordLengthInput = document.getElementById('word-length');
const submitBtn = document.getElementById('submit');
const timeOutInput = document.getElementById('set-timeout');
const closeBtn = document.querySelector('.rules-open');

closeBtn.addEventListener('click', function (event) {
    const rulesLoader = document.querySelector('.cssload-box-loading');
    const rulesDescription = document.querySelector('.rules-description');
    if(event.target.classList.contains('cssload-box-loading')) {
        rulesHandler(closeBtn, rulesLoader, rulesDescription)
    }
    if(event.target.classList.contains('rules-close')) {
        rulesHandler(closeBtn, rulesLoader, rulesDescription)
    }
});

submitBtn.addEventListener('click', insertChineseWord);

function rulesHandler(el1, el2, el3) {
    el1.classList.toggle('rules-close');
    el2.classList.toggle('hide');
    el3.classList.toggle('hide');
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