/*Functions section*/

function getMaxValue(value1) {
    let answer;
    answer = Math.max.apply(null, value1.toString().split('').map(item => +item));
    return answer;
}

function power(value1, value2) {
    let answer;
    const n = Number(value1);
    const m = Number(value2);
    answer = n;
    if (m === 0) {
        answer = 1;
    }
    for (let i = 1; i < m; i++) {
        answer *= n;
    }
    return answer;
}

function stringFormatting(value1) {
    let answer;
    answer = value1.charAt(0).toUpperCase() + value1.substring(1);
    return answer;
}

function remainingSalary(value1) {
    let answer;
    const temp = Number(value1);
    answer = (temp - temp * 0.195.toFixed(3));
    return answer;
}

function getRandomNumber(value1, value2) {
    let answer;
    const n = Number(value1);
    const m = Number(value2);
    answer = Math.floor(n + Math.random() * (m + 1 - n));
    return answer;
}

function countLetter(value1, value2) {
    let answer = 0;
    value2.toLowerCase().split('').find(a => {
        a === value1 && answer++;
    });
    return answer;
}

function convertCurrency(value1) {
    let answer;
    const rate = 25;
    value1[value1.length - 1] === '$'
        ? answer = parseInt(value1.substring(0, value1.length - 1)) * rate + ' UAH'
        : answer = parseInt(value1.substring(0, value1.length - 3)) / rate + ' $';
    return answer;
}

function getRandomPassword(value1) {
    let answer = '';
    for (let i = 0; i < Number(value1); i++) {
        const temp = Math.floor(1 + Math.random() * (9 - 1));
        answer += temp;
    }
    return answer;
}

function deleteLetters(value1, value2) {
    let answer;
    answer = value2.toLowerCase().split('').filter(item => item !== value1).join('');
    return answer;

}

function isPalyndrom(value1) {
    let answer;
    const temp = value1.toLowerCase();
    answer = temp === temp.split('').reverse().join('');
    return answer;
}

function deleteDuplicateLetter(value1) {
    let answer;
    answer = value1.split('').filter((el, i, arr) => {
        return arr.indexOf(el) === arr.lastIndexOf(el)
    }).join('');
    return answer;
}