/*Initializing*/

const startBtn = document.querySelector('#submit');
startBtn.addEventListener('click', startGame);

/*Задротство)*/

function startGame() {

    hideElement(startBtn);
    const startValue = +prompt('Введіть стартове число', '10');
    const endValue = +prompt('Введіть кінцеве число', '100');
    const booleanData = confirm('Пропускати парні числа?');

    const result = calculate(startValue, endValue, booleanData);

    /*Creating timer function*/

    let timer = setTimeout(() => {
        const calculating = document.createElement('h2');
        calculating.textContent = 'Зачекайте - проводимо розрахунки...';
        document.body.appendChild(calculating);
        setTimeout(() => {
            document.body.removeChild(calculating);
            const answer = document.createElement('h2');
            answer.innerHTML = 'Результат суми даного циклу складає:' +
                `<div class="answer">${result}</div> 
                <button class="btn" id="restart">Го ще раз</button>`;
            document.body.appendChild(answer);
            document.getElementById('restart').addEventListener('click', () => {
                document.body.removeChild(answer);
                clearTimeout(timer);
                showElement(startBtn);
            })
        }, 2000)

    }, 1000);

}

/*Loops logic*/

function calculate(val1, val2, flag) {
    val1 = validator(val1);
    val2 = validator(val2);

    if (val1 >= val2) {
        alert('Второе число должно быть больше');
        return;
    }

    let counter = 0;

    for (let i = val1; i <= val2; flag === true ? i += 2 : i++) {
        counter += i;
    }

    return counter;
}

/*IsPrime (IsNumber Simple) checking*/

function validator(value) {
    return (value).toString().indexOf('.') !== -1 ? value = Math.floor(value) : value;
}

/*Show/hide element functions*/

function hideElement(elem) {
    elem.classList.add('hide')
}

function showElement(elem) {
    elem.classList.remove('hide')
}

