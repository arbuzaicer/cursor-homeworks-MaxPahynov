/*Variables section*/

const increaseFontSizeBtn = document.getElementById('increase');
const decreaseFontSizeBtn = document.getElementById('decrease');
const textarea = document.querySelector('.font-size');
const currentFont = document.querySelector('.badge-warning');

/*Generators*/

export const idGenerator = createIdGenerator();
const fontGenerator = newFontGenerator(14);
fontGenerator.next();

/*Listeners*/

increaseFontSizeBtn.addEventListener('click', () => {
    fontGenerator.next('up').value;
});

decreaseFontSizeBtn.addEventListener('click', () => {
    fontGenerator.next('down').value;
});

/*Functions*/

function* newFontGenerator(startSize) {
    textarea.style.fontSize = startSize + 'px';
    let currentFontSize = parseInt(window.getComputedStyle(textarea).fontSize);
    while (true) {
        let fontSize = yield currentFontSize;
        if (fontSize === 'up') {
            currentFontSize += 2;
        }
        else {
            currentFontSize -= 2;
        }
        textarea.style.fontSize = currentFontSize + 'px';
        setFontValues();
    }
}

function* createIdGenerator() {
    let count = 1;
    while (true) {
        yield count++;
    }
}

function setFontValues() {
    currentFont.textContent = textarea.style.fontSize;
}
