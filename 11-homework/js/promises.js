export default async function getRandomChinese(length, time) {
    let counter = 0;
    let result = '';
    const generateAsyncWord = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(createChineseWord());
            }, time)
        });
    };
    for (let i = 0; i < length; i++) {
        result += await generateAsyncWord();
        counter++;
    }
    return result;
}

function createChineseWord() {
    const now = Date.now();
    const chart = now.toString().substr(now.length - 5);
    return String.fromCharCode(chart);
}