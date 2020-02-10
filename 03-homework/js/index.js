const inputBlock = document.querySelector('.input-field');
const submit = document.getElementById('submit');
const digit = document.querySelector('.input-field__el1');
const digit2 = document.querySelector('.input-field__el2');
const close = document.querySelector('.close');

/*Listeners*/

function inputShowOne(selector, el, description) {
    if (document.querySelector('.description')) {
        document.querySelector('.description').remove();
    }
    inputBlock.style.top = '0%';
    document.querySelector('.input-field__el2').classList.add('hidden');
    inputBlock.insertAdjacentHTML("afterbegin", description);

    submit.onclick = () => {
        inputBlock.style.top = '-130%';
        const answer = calculate(selector, digit.value, digit2.value);
        document.getElementById(el).textContent = answer;
        digit.value = digit2.value = '';
    };
}

close.addEventListener('click', () => {
    inputBlock.style.top = '-130%';
});

function inputShowTwo(selector, el, description) {
    if (document.querySelector('.description')) {
        document.querySelector('.description').remove();
    }
    inputBlock.style.top = '0%';
    document.querySelector('.input-field__el2').classList.remove('hidden');
    inputBlock.insertAdjacentHTML("afterbegin", description);

    submit.onclick = () => {
        inputBlock.style.top = '-130%';
        const answer = calculate(selector, digit.value, digit2.value);
        document.getElementById(el).textContent = answer;
        digit.value = digit2.value = '';
    };
}