const inputBlock = document.querySelector('.inputField');
const submit = document.getElementById('submit');
const digit = document.querySelector('.inputField1');
const digit2 = document.querySelector('.inputField2');
const close = document.querySelector('.close');


function inputShowOne(selector, el) {
    inputBlock.style.top = '0%';
    document.querySelector('.inputField2').classList.add('hide');

    submit.onclick = () => {
        inputBlock.style.top = '-130%';
        const answer = calculate(selector, digit.value, digit2.value);
        document.getElementById(el).textContent = answer;
        digit.value = digit2.value = '';
    };
}

close.addEventListener('click', () => {
    inputBlock.style.top = '-130%';
});


function inputShowTwo(selector, el) {
    inputBlock.style.top = '0%';
    document.querySelector('.inputField2').classList.remove('hide');

    submit.onclick = () => {
        inputBlock.style.top = '-130%';
        const answer = calculate(selector, digit.value, digit2.value);
        document.getElementById(el).textContent = answer;
        digit.value = digit2.value = '';
    };
}

/*My custom reducer, or something like that*/

function calculate(selector, value1, value2) {
    let answer;

    switch (selector) {
        case 'maxDigit': {
            answer = Math.max.apply(null, value1.toString().split('').map(item => +item));
            break;
        }
        case 'power': {
            const n = Number(value1);
            const m = Number(value2);
            answer = n;
            if (m === 0) {
                answer = 1;
            }
            for (let i = 1; i < m; i++) {
                answer *= n;
            }
            break;
        }
        case 'stringFormatting': {
            const temp = value1.toLowerCase();
            answer = temp.charAt(0).toUpperCase() + temp.substring(1);
            break;
        }
        case 'remainingSalary': {
            const temp = Number(value1);
            answer = (temp - temp * 0.195.toFixed(3));
        }
        case 'getRandomNumber': {
            const n = Number(value1);
            const m = Number(value2);
            answer = Math.floor(n + Math.random() * (m + 1 - n));
            break;
        }
        case 'countLetter': {
            answer = 0;
            value2.toLowerCase().split('').find(a => {
                a === value1 && answer++;
            });
            break;
        }
        case 'convertCurrency': {
            const rate = 25;
            value1[value1.length - 1] === '$'
                ? answer = parseInt(value1.substring(0, value1.length - 1)) * rate + ' UAH'
                : answer = parseInt(value1.substring(0, value1.length - 3)) / rate + ' $';
            break;
        }
        case 'getRandomPassword': {
            answer = '';
            for (let i = 0; i < Number(value1); i++) {
                const temp = Math.floor(1 + Math.random() * (9 - 1));
                answer += temp;
            }
            break;
        }
        case 'deleteLetters': {
            answer = value2.toLowerCase().split('').filter(item => item !== value1).join('');
            break;

        }
        case 'isPalyndrom': {
            const temp = value1.toLowerCase();
            answer = temp === temp.split('').reverse().join('');
            break;
        }
        case 'deleteDuplicateLetter': {
            answer = value1.split('').filter((el, i, arr) => {
                return arr.indexOf(el) === arr.lastIndexOf(el)
            }).join('');
            break;
        }

    }

    return answer;
}