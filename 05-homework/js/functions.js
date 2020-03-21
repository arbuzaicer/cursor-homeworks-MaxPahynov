/*-------------------------------------------Additional functions section---------------------------------------------*/
const integerValue = (arr) => {
    return arr.filter(item => {
        return !item.toString().includes('.')
    }).map(el => Number(el));
};

const generatedRandomValue = (minValue, maxValue) => {
    return Math.floor(Math.random() * (maxValue + 1 - minValue) + minValue)
};

/*-------------------------------------------Main functions section---------------------------------------------------*/

const getRandomArray = (length, min, max) => {
    const tempArr = [];
    for (let i = 0; i < length; i++) {
        tempArr.push(generatedRandomValue(min, max));
    }
    return tempArr;
};

const getModa = (numbers) => {
    let result = [];
    let count = 0;
    const filteredPrime = integerValue(numbers).sort((a, b) => a - b);

    for (let i = 0; i < filteredPrime.length; i++) {
        if (filteredPrime[i] === filteredPrime[i + 1]) {
            count++;
        } else {
            result.push([filteredPrime[i], count]);
            count = 0;
        }
    }

    result = result.sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < result.length; i++) {
        if (result[i][1] !== result[i + 1][1]) {
            return result[i][0];
        } else {
            return [result[i][0], result[i + 1][0]];
        }
    }

};

const getAverage = (numbers) => {
    const filteredPrime = integerValue(numbers);
    return (filteredPrime.reduce((sum, cur) => sum + cur, 0) / filteredPrime.length).toFixed(2);
};

const getMedian = (numbers) => {
    const filteredPrime = integerValue(numbers).sort((a, b) => a - b);
    return filteredPrime.length % 2 !== 0 ? filteredPrime[Math.floor(filteredPrime.length / 2)] : (filteredPrime[filteredPrime.length / 2 - 1] + filteredPrime[filteredPrime.length / 2]) / 2;
};

const filterEvenNumbers = (numbers) => {
    const filteredPrime = integerValue(numbers);
    return filteredPrime.filter(el => el % 2 !== 0)
};

const countPositiveNumbers = (numbers) => {
    const filteredPrime = integerValue(numbers);
    return filteredPrime.filter(el => el >= 0).length;
};

const getDividedByFive = (numbers) => {
    const filteredPrime = integerValue(numbers);
    return filteredPrime.filter(el => el % 5 === 0)
};

const replaceBadWords = (string) => {
    const badWords = ['shit', 'fuck'];
    const arrayToRegExp = new RegExp(badWords.join('|'), 'gi'); /*Convert array with bad words into Reg Exp*/
    return string.replace(arrayToRegExp, '****');
};

const divideByThree = (word) => {
    const temp = word.split(' ').join('').toLowerCase();
    return temp.match(/.{1,3}/g);
};

const generateCombinations = (word) => {
    const tempStr = '';
    const result = [];
    /*Recursion function*/
    const anagramFinder = (inputWord, str) => {
        if (!inputWord) {
            result.push(str);
            return;
        }
        for (let i = 0; i < inputWord.length; i++) {
            str += inputWord[i];
            anagramFinder(inputWord.slice(0, i) + inputWord.slice(i + 1), str);
            str = str.slice(0, str.length - 1)
        }
    };
    anagramFinder(word, tempStr);

    return result;
};

export {
    getRandomArray,
    getModa,
    getAverage,
    getMedian,
    filterEvenNumbers,
    countPositiveNumbers,
    getDividedByFive,
    replaceBadWords,
    divideByThree,
    generateCombinations
}