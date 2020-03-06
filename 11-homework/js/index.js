async function getRandomChinese(length) {
    let counter = 0;
    let result = '';
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            result += createChinaWord();
            resolve(result);
        }, 50)
    });

    while (counter < length-1) {
        await promise
            .then(() => {
                return new Promise(res => {
                    setTimeout(() => {
                        result += createChinaWord();
                        res(result);
                    }, 50)
                })
            });
        counter++;
    }
    return result;
}

console.log(getRandomChinese(5).then((data)=> {
    console.log(data)
}))


function createChinaWord() {
    const now = Date.now();
    let sign = now.toString().substr(8);
    if (sign.length < 5) {
        sign = 1 + sign;
    }
    sign = String.fromCharCode(sign);
    return sign;
}

/*let prom = new Promise((resolve) => {
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
