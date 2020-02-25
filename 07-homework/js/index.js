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

function getMySalary(country) {
    const minSalary = 1500;
    const maxSalary = 2000;
    const secondsValue = 1;

    let timerID = setTimeout(getInfo = () => {
        const salary = Number(Math.floor(Math.random() * (maxSalary - minSalary) + minSalary));
        const taxes = Number((salary * country.tax).toFixed(2));
        const profit = Number((salary - taxes).toFixed(2));
        console.log({salary, taxes, profit});
        timerID = setTimeout(getInfo, secondsValue * 1000);
    }, secondsValue * 1000);
}

getMySalary(litva)


