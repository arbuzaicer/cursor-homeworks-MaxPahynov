/*Function 1 - Создать функцию getMaxDigit(number) – которая получает любое число и выводит самую большую цифру в этом числе. Примеры: 1236 -> 6, 987 -> 9, 385 -> 8*/

function getMaxValue(value) {
    if(isNaN(value)) {
        return 'Ви ввели хибне значення';
    }
    return Math.max.apply(null, value.toString().split('').map(item => Number(item)));
}

/*Function 2  - Создать функцию, которая вычисляет степень числа. Не используя Math.pow и **. Используйте цикл*/

function power(num,pow) {
    let result;
    const n = Number(num);
    const m = Number(pow);
    if(isNaN(num) || isNaN(pow)) {
        return 'Ви ввели хибні значення';
    }
    result = n;
    if (m === 0) {
        result = 1;
    }
    for (let i = 1; i < m; i++) {
        result *= n;
    }
    return result;
}

/*Function 3 - Создать функцию, которая форматирует имя, делая первую букву заглавной. ("влад" -> "Влад", "вЛАД" -> "Влад" и так далее);*/

function stringFormatting(str) {
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

/*Function 4 - Создать функцию, которая вычисляет сумму оставшуюся после оплаты налога от заработной платы. (Налог = 18% + 1.5% -> 19.5%). Пример: 1000 -> 805*/

function remainingSalary(value) {
    const temp = Number(value);
    const taxes = 19.5/100;
    if(isNaN(Number(temp))){
       return 'Ви ввели хибне значення';
    }
    return (temp - temp * taxes).toFixed(2);
}

/*Function 5 - Создать функцию, которая возвращает случайное целое число в диапазоне от N до M. Пример: getRandomNumber(1, 10) -> 5*/

function getRandomNumber(startValue, endValue) {
    const n = Number(startValue);
    const m = Number(endValue);
    if(isNaN(n) || isNaN(m)) {
        return 'Ви ввели хибні значення';
    }
    return Math.floor(n + Math.random() * (m + 1 - n));
}

/*Function 6 - Создать функцию, которая считает сколько раз определенная буква повторяется в слове. Пример: countLetter("а", "Асталависта") -> 4*/

function countLetter(letter, str) {
    let result = 0;
    str.toLowerCase().split('').find(a => {
        if(a === letter) {
            result++;
        }
    });
    return result;
}

/*Function 7 - Создайте функцию конвертиующую доллары в гривны и наоборот в зависимости от наличия символа $ или UAH в строке. Пример: convertCurrency("100$") -> 2500 грн. или convertCurrency("2500UAH") -> 100$
Учтите, другие валюты не конвертируются, нужно выводить ошибку, а так же регистр uah не имеет значения.*/

function convertCurrency(value) {
    const rate = 25;
    if(value[value.length - 1] === '$') {
        return parseInt(value.substring(0, value.length - 1)) * rate + ' UAH';
    }
    if(value.substring(value.length - 3).toLowerCase() === 'uah') {
       return parseInt(value.substring(0, value.length - 3)) / rate + ' $';
    }
    else {
        return 'Не валідна валюта'
    }
}

/*Function 8 - Создайте функцию генерации случайного пароля (только числа), длинна устанавливается пользователем или по умолчанию = 8 символам.
Пример: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124*/

function getRandomPassword(length) {
    if (isNaN(length)) {
        return 'Ви ввели хибне значення';
    }
    let result = '';
    for (let i = 0; i < Number(length); i++) {
        const temp = Math.floor(1 + Math.random() * (9 - 1));
        result += temp;
    }
    return result;
}

/*Function 9 - Создайте функцию, которая удаляет все буквы из предложения. Пример: deleteLetters('a', "blablabla") -> "blblbl"*/

function deleteLetters(letter, str) {
    return str.toLowerCase().split('').filter(item => item !== letter).join('');
}

/*Function 10 - Создайте функцию, которая проверяет является ли слово палиндромом. Пример: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Аргентина манит негра") -> true*/

function isPalyndrom(str) {
    const temp = str.toLowerCase();
    return temp === temp.split('').reverse().join('');
}

/*Function 11 - Создайте функцию, которая удалит из предложения буквы, которые встречаются более 1 раза. Пример: deleteDuplicateLetter("Бисквит был очень нежный") -> "сквтлчьжй"*/

function deleteDuplicateLetter(str) {
    return str.toLowerCase().split('').filter((el, i, arr) => {
        return arr.indexOf(el) === arr.lastIndexOf(el)
    }).join('');
}