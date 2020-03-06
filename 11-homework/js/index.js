const wordLength = document.getElementById('word-length');
const submitBtn = document.getElementById('submit');
const timeOutInput = document.getElementById('set-timeout');

submitBtn.addEventListener('click', insertChineseWord);

function insertChineseWord() {
    const length = Number(wordLength.value);
    const time = Number(timeOutInput.value);
    if (!inputValidation(length, time)) {
        return;
    }
    getRandomChinese(length, time).then(data => {
        if (document.querySelector('.result')) {
            document.body.removeChild(document.querySelector('.result'))
        }
        const output = document.createElement('h1');
        output.classList.add('result');
        output.textContent = data;
        document.body.appendChild(output);
    });
}

async function getRandomChinese(length, time) {
    let counter = 0;
    let result = '';
    const timeOutValue = time;
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            result += createChineseWord();
            resolve(result);
        }, timeOutValue)
    });
    for (let i = 0; i < length - 1; i++) {
        await promise
            .then(() => {
                return new Promise(res => {
                    setTimeout(() => {
                        result += createChineseWord();
                        res(result);
                    }, timeOutValue)
                })
            });
        counter++;
    }
    return result;
}

function createChineseWord() {
    const now = Date.now();
    let sign = now.toString().substr(8);
    return String.fromCharCode(sign.toString());
}

function inputValidation() {
    let args = Array.from(arguments);
    args.forEach(item => {
        if (!item || item < 0) {
            alert('Ввєді валідна чісло!!!');
            return false;
        }
    });
    return true;
}