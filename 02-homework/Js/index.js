/*Initializing*/

const startBtn = document.querySelector('#submit');
startBtn.addEventListener('click', startGame);

/*Задротство)*/

function startGame() {

    hideElement(startBtn);
    const startValue = Number(prompt('Введіть стартове число', '10'));
    const endValue = Number(prompt('Введіть кінцеве число', '100'));
    const booleanData = confirm('Пропускати парні числа?');

    const result = calculate(startValue, endValue, booleanData);
    if(!result) {
        alert('Друге значення повинно бути більшим ніж перше. Давайте ще раз');
        const btn = document.createElement('h2');
        btn.innerHTML = `<button class="btn" id="restart">Го ще раз</button>`;
        document.body.appendChild(btn);
        document.getElementById('restart').addEventListener('click', () => {
            showElement(startBtn);
            document.body.removeChild(btn);
        });
        return;
    }

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
    val1 =  Math.floor(val1);
    val2 =  Math.floor(val2);

    if (val1 >= val2) {
        return;
    }

    let counter = 0;

    for (let i = val1; i <= val2; i++) {
        if (flag) {
            if (i % 2 !== 0) {
                counter += i;
            }
        } else {
            counter += i;
        }
    }

    return counter;
}

/*Show/hide element functions*/

function hideElement(elem) {
    elem.classList.add('hide')
}

function showElement(elem) {
    elem.classList.remove('hide')
}