function setSubject(arr, subject) {
    return arr.map((item, i) => {
        const singleCouple = item.reduce ((sum, el)=> {
            return `${sum} і ${el}`
        });
        return [singleCouple, subject[i]]
    });
}

function setMarks(arr, mark) {
    return arr.map((item, i) => {
        return [item, mark[i]]
    });
}

function getRandomMark() {
    const minMark = 1;
    const maxMark = 5;
    return Math.floor(Math.random() * (maxMark + 1 - minMark) + minMark)
}

function setSubjectsResults(arr) {
    return arr.map(item => {
        const marks = getRandomMark();
        return [...item, marks]
    });
}

const couplesAndSubject = setSubject(coupleStudents, themes);
const studentsMark = setMarks(students, marks);
const couplesAndMarks = setSubjectsResults(couplesAndSubject);