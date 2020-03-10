export default async function getRandomChinese(length, time) {
    let counter = 0;
    let result = '';
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            result += createChineseWord();
            resolve(result);
        }, time)
    });
    for (let i = 0; i < length - 1; i++) { //-1 is because the first promise created above the loop
        await promise
            .then(() => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        result += createChineseWord();
                        resolve(result);
                    }, time)
                })
            });
        counter++;
    }
    return result;
}

function createChineseWord() {
    const now = Date.now();
    const chart = now.toString().substr(now.length - 5);
    return String.fromCharCode(chart);
}