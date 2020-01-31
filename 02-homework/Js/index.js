const startValue = +prompt('Enter start value', '10');
const endValue = +prompt('Enter end value', '100');
const booleanData = confirm('Пропускать четные');


function calculate(val1, val2, flag) {
    val1 = validator(val1);
    val2 = validator(val2);

    if (val1 >= val2) {
        alert('Второе число должно быть больше');
        return;
    }

    let counter = 0;

    for (let i = val1; i <= val2; flag === true ? i += 2 : i ++) {
        counter += i;
    }
    return counter;
}

function validator(value) {
    return (value).toString().indexOf('.') !== -1 ? value = Math.floor(value) : value;
}

console.log(calculate(startValue, endValue, booleanData));
