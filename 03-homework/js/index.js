const inputBlock = document.querySelector('.input-field');
const submit = document.getElementById('submit');
const inputFieldFirst = document.querySelector('.input-field__input1');
const inputFieldSecond = document.querySelector('.input-field__input2');
const close = document.querySelector('.close');

/*Listeners*/

function setOneArgFunction(selector, el, description) {
    if (document.querySelector('.description')) {
        document.querySelector('.description').remove();
    }
    inputBlock.style.top = '0%';
    document.querySelector('.input-field__input2').classList.add('hidden');
    inputBlock.insertAdjacentHTML("afterbegin", description);

    submit.onclick = () => {
        inputBlock.style.top = '-130%';
        document.getElementById(el).textContent = calculate(selector, inputFieldFirst.value, inputFieldSecond.value);
        inputFieldFirst.value = inputFieldSecond.value = '';
    };
}

close.addEventListener('click', () => {
    inputBlock.style.top = '-130%';
});

function setTwoArgFunction(selector, el, description) {
    if (document.querySelector('.description')) {
        document.querySelector('.description').remove();
    }
    inputBlock.style.top = '0%';
    document.querySelector('.input-field__input2').classList.remove('hidden');
    inputBlock.insertAdjacentHTML("afterbegin", description);

    submit.onclick = () => {
        inputBlock.style.top = '-130%';
        document.getElementById(el).textContent = calculate(selector, inputFieldFirst.value, inputFieldSecond.value);
        inputFieldFirst.value = inputFieldSecond.value = '';
    };
}