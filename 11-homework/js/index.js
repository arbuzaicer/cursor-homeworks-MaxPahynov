import getRandomChinese from './promises.js'
import inputValidation from './validation.js'

/*Variables initializing*/

const wordLengthInput = document.getElementById('word-length');
const submitBtn = document.getElementById('submit');
const timeOutInput = document.getElementById('set-timeout');
const closeBtn = document.querySelector('.rules-open');
const rulesLoader = document.querySelector('.cssload-box-loading');
const rulesDescription = document.querySelector('.rules-description');
const menuBtn = document.querySelector('.menu-icon');

/*Listeners*/

closeBtn.addEventListener('click', function (event) {
    if (event.target.classList.contains('cssload-box-loading') || event.target.classList.contains('menu-icon')) {
        rulesHandler(
            {el: closeBtn, className: 'rules-close'},
            {el: rulesLoader, className: 'hide'},
            {el: rulesDescription, className: 'hide'},
            {el: menuBtn, className: 'hide'}
        )
    }
});

window.addEventListener('keyup', function (event) {
    if(event.code === "Escape") {
        rulesHandler(
            {el: closeBtn, className: 'rules-close'},
            {el: rulesLoader, className: 'hide'},
            {el: rulesDescription, className: 'hide'},
            {el: menuBtn, className: 'hide'}
        )
    }
});

submitBtn.addEventListener('click', insertChineseWord);

/*Private functions*/

function rulesHandler(...args) {
    args.forEach(elem => {
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
        const resultSection = document.querySelector('.result');
        if(resultSection) {
            document.body.removeChild(resultSection)
        }
        const result = document.createElement('h1');
        result.classList.add('result');
        result.textContent = data;
        document.body.appendChild(result);
    });
}