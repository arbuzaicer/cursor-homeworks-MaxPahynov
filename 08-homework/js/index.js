/*------------------------------------------------------Main tasks------------------------------------------------------*/

class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marksData = [5, 4, 4, 5, 5];
        this.isDismiss = false;
    }

    getInfo() {
        return `Студент ${this.course}го курсу ${this.university},  ${this.fullName}`
    }

    dismiss() {
        this.isDismiss = true;
    }

    recover() {
        this.isDismiss = false;
    }

    get marks() {
        if (this.isDismiss) {
            return null;
        }
        return this.marksData;
    }

    set marks(value) {
        if (this.isDismiss) {
            return null;
        }
        this.marksData.push(value);
    }

    getAverageMark() {
        return Number((this.marksData.reduce((total, curr) => total + curr, 0) / this.marksData.length).toFixed(2));
    }
}

let studentOlga = new Student('Київський політехнічний інститут', 4, 'Ольга Романова');

/*---------------------------------------------------Advanced tasks---------------------------------------------------*/

class BudgetStudent extends Student {
    constructor(...props) {
        super(...props);
        this.timeInterval = 30;
        this.validValue = 4;
        setInterval(this.getScholarship.bind(this), this.timeInterval * 1000)
    }

    getScholarship() {
        if (this.getAverageMark() < this.validValue || this.isDismiss) {
            /*console.log('Сорі, але для стьопки треба вчитись((')*/
        } else {
           /* console.log(`Ви отримали 1400 грн. стипендії`);*/
        }
    }
}

export const studIvan = new BudgetStudent('Львівскьий політех', 5, 'Олег Володимирський');
