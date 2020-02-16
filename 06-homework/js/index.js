const students = [
    {
        name: "Tanya",
        course: 3,
        subjects: {
            math: [4, 4, 3, 4],
            algorithms: [3, 3, 3, 4, 4, 4],
            data_science: [5, 5, 3, 4]
        }
    },
    {
        name: "Victor",
        course: 4,
        subjects: {
            physics: [5, 5, 5, 3],
            economics: [2, 3, 3, 3, 3, 5],
            geometry: [5, 5, 2, 3, 5]
        }
    },
    {
        name: "Anton",
        course: 2,
        subjects: {
            statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
            english: [5, 3],
            cosmology: [5, 5, 5, 5]
        }
    }
];

/*---------------------------------------------------------------------------------------------------------------------*/

/*
const getSubjects = (item) => {
    const subjects = Object.keys(item['subjects']);
    return subjects.map(item => (item.charAt(0).toUpperCase()+item.slice(1)).replace('_', ' '));
};
*/

/*---------------------------------------------------------------------------------------------------------------------*/

/*
const getAverageMark = (item) => {
    const marks = Object.values(item.subjects).flatMap(item=>item);
    return Number((marks.reduce((sum, current)=>sum+current)/marks.length).toFixed(2));
};
*/


/*---------------------------------------------------------------------------------------------------------------------*/

/*
const getStudentInfo = (item) => {
    const info = {...item};
    delete info.subjects;
    return JSON.stringify({...info, averageMark: getAverageMark(item)})
};
*/

/*---------------------------------------------------------------------------------------------------------------------*/

/*
const getStudentsNames = (arr) => {
   return arr.map(el=>el.name).sort()
}
*/

/*---------------------------------------------------------------------------------------------------------------------*/

/*
const getBestStudent = (arr) => {
    const studentsArr = arr.map(el=>JSON.parse(getStudentInfo(el)));
    const maxMark = Math.max(...studentsArr.map(item=>item.averageMark));
    const betterStudent = studentsArr.find(stud=>stud.averageMark === maxMark);
    return betterStudent.name
};
*/

/*---------------------------------------------------------------------------------------------------------------------*/

const calculateWordLetters = (str) => {
    let count = 1;
    const strArr = str.toLowerCase().split('');
    let obj = {};
    for (let i = 0; i < strArr.length; i++) {
        obj[strArr[i]] = count;
        for (let j = 0; j < strArr.length; j++) {
            if (strArr[i] === strArr[j] && i !== j) {
                count++;
                obj[strArr[i]] = count;
                count = 1;

            }
        }
    }
    return obj;
};

console.log(calculateWordLetters('тест'))


