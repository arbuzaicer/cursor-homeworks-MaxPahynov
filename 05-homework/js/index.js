const getRandomArray = (length, min, max) => {
    let tempArr = [];
    for (let i = 0; i < length; i++) {
        tempArr.push(generatedRandomValue(min, max));
    }
    return tempArr;
};

const getModa = (...numbers) => {
    let tempArr = [];
    let count = 0;
    const filteredPrime = isPrime(numbers).sort((a, b) => a - b);

    for (let i = 0; i < filteredPrime.length; i++) {
        if (filteredPrime[i] === filteredPrime[i + 1]) {
            count++;
        } else {
            tempArr.push([filteredPrime[i], count]);
            count = 0;
        }
    }
    tempArr = tempArr.sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i][1] !== tempArr[i + 1][1]) {
            return tempArr[i][0];
        } else {
            return [tempArr[i][0], tempArr[i + 1][0]];
        }
    }
};

const getAverage = (...numbers) => {
    const filteredPrime = isPrime(numbers);
    return filteredPrime.reduce((sum, cur) => sum + cur, 0) / filteredPrime.length;
};

const getMedian = (...numbers) => {
    const filteredPrime = isPrime(numbers).sort((a, b) => a - b);
    return filteredPrime.length % 2 !== 0 ? filteredPrime[Math.floor(filteredPrime.length / 2)] : (filteredPrime[filteredPrime.length / 2 - 1] + filteredPrime[filteredPrime.length / 2]) / 2;

};

const filterEvenNumbers = (...numbers) => {
    const filteredPrime = isPrime(numbers);
    return filteredPrime.filter(el => el % 2 !== 0)
};

const countPositiveNumbers = (...numbers) => {
    const filteredPrime = isPrime(numbers);
    return filteredPrime.filter(el => el >= 0).length;
};

const getDividedByFive = (...numbers) => {
    const filteredPrime = isPrime(numbers);
    return filteredPrime.filter(el => el % 5 === 0)
};

const replaceBadWords = (str) => {
    const badWords = ['shit', 'fuck'];
    return str.split(' ').map(el => {
        return badWords.some(data => {
            if (el.includes(data)) {
                return el.replace(data, '****')
            }
        })
    }).join(' ');
};

/*-------------------------------------------Additional functions-----------------------------------------------------*/
const isPrime = (arr) => {
    return arr.filter(item => {
        return !item.toString().includes('.')
    }).map(el => Number(el));
};

const generatedRandomValue = (minValue, maxValue) => {
    return Math.floor(Math.random() * (maxValue + 1 - minValue) + minValue)
};


console.log(replaceBadWords("Are you fucking kidding?"));
