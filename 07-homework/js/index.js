const ukraine = {tax: 0.195, middleSalary: 1789, vacancies: 11476};
const latvia = {tax: 0.25, middleSalary: 1586, vacancies: 3921};
const litva = {tax: 0.15, middleSalary: 1509, vacancies: 1114};

function getMyTaxes(salary) {
    return salary * this.tax
}

console.log('Податок в країні складає: ' + getMyTaxes.call(latvia, 2850))

function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}

console.log('Середня величина податків в обраній країні: ' + getMiddleTaxes.call(litva))

function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}

console.log('Сумарана кількість податків в обраній країні: ' + getTotalTaxes.call(ukraine))

function getMySalary() {
    const secondsValue = 10;

    let timerID = setTimeout(tick = () => {
        const salary = Number(Math.floor(Math.random() * (2001 - 1500) + 1500));
        const taxes = Number((salary * this.tax).toFixed(2));
        const profit = Number((salary - taxes).toFixed(2));
        const salaryData = {salary, taxes, profit};
        console.log(salaryData);
        timerID = setTimeout(tick, secondsValue * 1000);
    }, secondsValue * 1000)
}

getMySalary.call(ukraine);

