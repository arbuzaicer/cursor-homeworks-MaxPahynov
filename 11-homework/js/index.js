function getRandomChinese(length) {
    let counter = 0;
    let outputWord = '';
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            outputWord += createChinaWord();
            resolve(outputWord);
        }, 1500)
    });
    while (counter < length) {
        promise
            .then(data => { //хід думок такий, що я думав що поки робити зени в промісах до того моменту поки каунтер не дійде до довжини
                return new Promise(res => {
                    setTimeout(() => {
                        outputWord = data + createChinaWord();
                        console.log(outputWord);
                        res(outputWord);
                    }, 1500)
                })
            });
        counter++;
    }
    return outputWord;
}

function createChinaWord() {
    const now = Date.now();
    const sign = now.toString().substr(8);
    return String.fromCharCode(sign);
}

getRandomChinese(5)


/*let prom = new Promise((resolve) => { //а тут я зробив приклад - коли запити робляться так як я хочу...
    let a = 1;
    setTimeout(() => {
        resolve(a);
    }, 1000)
});

prom
    .then(data => {
        return new Promise((res) => {
            setTimeout(() => {
                res(successCallback(data));
            }, 1500)
        });
    })
    .then(data => {
        return new Promise((res) => {
            setTimeout(() => {
                res(successCallback(data));
            }, 1500)
        });
    });

function successCallback(value) {
    console.log(value)
    value++;
    return value;
}

function failureCallback(error) {
    console.log(error)
}*/
