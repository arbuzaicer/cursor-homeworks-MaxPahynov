function calculate(selector, inp1, inp2) {
    switch (selector) {
        case 'maxDigit': {
            return getMaxValue(inp1);
        }
        case 'power': {
            return power(inp1, inp2);
        }
        case 'stringFormatting': {
            return stringFormatting(inp1);
        }
        case 'remainingSalary': {
            return remainingSalary(inp1);
        }
        case 'getRandomNumber': {
            return getRandomNumber(inp1, inp2);
        }
        case 'countLetter': {
            return countLetter(inp1, inp2);
        }
        case 'convertCurrency': {
            return convertCurrency(inp1);
        }
        case 'getRandomPassword': {
            return getRandomPassword(inp1);
        }
        case 'deleteLetters': {
            return deleteLetters(inp1, inp2);

        }
        case 'isPalyndrom': {
            return isPalyndrom(inp1);
        }
        case 'deleteDuplicateLetter': {
            return deleteDuplicateLetter(inp1);
        }
    }
}