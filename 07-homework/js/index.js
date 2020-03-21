const ukraine = {tax: 0.195, middleSalary: 1789, vacancies: 11476};
const latvia = {tax: 0.25, middleSalary: 1586, vacancies: 3921};
const litva = {tax: 0.15, middleSalary: 1509, vacancies: 1114};

function getMyTaxes(salary) {
    return salary * this.tax
}

function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}

function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}

function getMySalary(country) {
    const minSalary = 1500;
    const maxSalary = 2000;
    const secondsValue = 10;

    let timerID = setInterval(() => {
        const salary = Number(Math.floor(Math.random() * (maxSalary - minSalary) + minSalary));
        const taxes = Number((salary * country.tax).toFixed(2));
        const profit = Number((salary - taxes).toFixed(2));
/*
        console.log({salary, taxes, profit});//turnedOff because webpack adjust and whole console logs data will display in console
*/
    }, secondsValue * 1000);
}

getMySalary(litva);

export {ukraine, latvia, litva, getMiddleTaxes};


