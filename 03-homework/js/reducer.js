/*Reducer or something like that*/
function calculate(selector, value1, value2) {
    let answer;
    switch (selector) {
        case 'maxDigit': {
            answer = getMaxValue(value1);
            break;
        }
        case 'power': {
            answer = power(value1, value2);
            break;
        }
        case 'stringFormatting': {
            answer = stringFormatting(value1);
            break;
        }
        case 'remainingSalary': {
            answer = remainingSalary(value1);
            break;
        }
        case 'getRandomNumber': {
            answer = getRandomNumber(value1, value2);
            break;
        }
        case 'countLetter': {
            answer = countLetter(value1, value2);
            break;
        }
        case 'convertCurrency': {
            answer = convertCurrency(value1);
            break;
        }
        case 'getRandomPassword': {
            answer = getRandomPassword(value1);
            break;
        }
        case 'deleteLetters': {
            answer = deleteLetters(value1, value2);
            break;

        }
        case 'isPalyndrom': {
            answer = isPalyndrom(value1);
            break;
        }
        case 'deleteDuplicateLetter': {
            answer = deleteDuplicateLetter(value1);
            break;
        }
    }
    return answer;
}