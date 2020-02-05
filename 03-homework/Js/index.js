const inputBlock = document.querySelector('.inputField');
const submit = document.getElementById('submit');
const digit = document.querySelector('.inputField1');
const digit2 = document.querySelector('.inputField2');

function inputShowOne(selector, el) {
    inputBlock.style.top = '0%';
    document.querySelector('.inputField2').classList.add('hide');

    submit.onclick = () => {
        inputBlock.style.top = '-100%';
        let answer = calculate(selector, digit.value, digit2.value);
        document.getElementById(el).textContent = answer;
        digit.value = digit2.value = '';
    };
}


function inputShowTwo(selector, el) {
    inputBlock.style.top = '0%';
    document.querySelector('.inputField2').classList.remove('hide');

    submit.onclick = () => {
        inputBlock.style.top = '-120%';
        let answer = calculate(selector, digit.value, digit2.value);
        document.getElementById(el).textContent = answer;
        digit.value = digit2.value = '';
    };
}


/*There is my custom dispatcher)) or something like that*/

function calculate(selector, value1, value2) {
    let answer;

    if (selector === 'maxDigit') {
        answer = Math.max.apply(null, value1.toString().split('').map(item => +item));
        return answer;
    }

    if (selector === 'power') {
        const n = Number(value1);
        const m = Number(value2)
        answer = n;
        if (m === 0) {
            answer = 1;
        }
        for (let i = 1; i < m; i++) {
            answer *= n;
        }
        return answer;
    }

    if (selector === 'stringFormatting') {
        let temp = value1.toLowerCase();
        answer = temp.charAt(0).toUpperCase() + temp.substring(1);
        return answer;
    }
    if (selector === 'remainingSalary') {
        let temp = Number(value1);
        answer = (temp - temp * 0.195.toFixed(3));
        return answer;
    }
    if (selector === 'getRandomNumber') {
        let n = Number(value1);
        let m = Number(value2);
        answer = Math.floor(n + Math.random() * (m + 1 - n));
        return answer;
    }
    if (selector === 'countLetter') {
        answer = 0;
        value2.toLowerCase().split('').find(a => {
            a === value1 && answer++;
        });
        return answer;
    }
    if (selector === 'convertCurrency') {
        const rate = 25;

        value1[value1.length - 1] === '$'
            ? answer = parseInt(value1.substring(0, value1.length - 1)) * rate + ' UAH'
            : answer = parseInt(value1.substring(0, value1.length - 3)) / rate + ' $';

        return answer;
    }
    if (selector === 'getRandomPassword') {
        answer = '';
        for (let i = 0; i < Number(value1); i++) {
            let temp = Math.floor(1 + Math.random() * (9 - 1));
            answer += temp;
        }
        return answer;
    }
    if (selector === 'deleteLetters') {
        return value2.toLowerCase().split('').filter(item=>item!==value1).join('');
    }
    if (selector === 'isPalyndrom') {
        const temp = value1.toLowerCase();
        return temp===temp.split('').reverse().join('');
    }
    if (selector === 'deleteDuplicateLetter') {
        answer = value1.split('').filter((el, i, arr)=> {
            return arr.indexOf(el)===arr.lastIndexOf(el)
        }).join('');
       return answer;
    }
}