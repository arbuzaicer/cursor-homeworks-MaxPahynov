/*Variables initializing*/
let inp1 = document.querySelector('#val1');
let inp2 = document.querySelector('#val2');
let inp3 = document.querySelector('#val3');
let resBtn = document.getElementById('reset');

document.getElementById('submit').addEventListener('click', getData);


function getData() {
    resBtn.classList.remove('hide');
    let blackTea = +inp1.value;
    let beef = +inp2.value;
    let mushrooms = +inp3.value;

    console.log('Max price is:',Math.max(blackTea, beef, mushrooms)); //Max value
    console.log('Min price is:',Math.min(blackTea, beef, mushrooms)); //Min value

    let total = blackTea+beef+mushrooms;

    console.log('Total price is:', total);
    console.log('Rounded to floor price:', Math.floor(total));


    function getRoundedValue(sum) {
        let value = sum.toString();
        let lengthValue = value.length;
        let curValue = sum/(10**(lengthValue-1));
        return Math.round(curValue)*10**(lengthValue-1);
    }

    console.log('Total price, rounded to hundreds: ', getRoundedValue(total.toFixed(0)));

    console.log(`Value ${Math.floor(total)} is:`, (Math.floor(total) % 2 === 0) ? 'Even': 'Odd');
    console.log('Change from 500 UAH is: ',500-total+' UAH');
    console.log('Average price:', ((total)/3).toFixed(2));


    let discount = Math.random().toFixed(2);
    console.log('Discount is:', discount);
    console.log('Price with discount is:', (total*(1-discount)).toFixed(2));
    console.log('Lost profit is:', (Math.floor(total/2)-(Math.floor(total)-Math.floor(total)*(1-discount))).toFixed(2));

    function innerHTML() {
        document.querySelector('.data').innerHTML = `
        <div class="resData"> Максимальное число <span class="values">${Math.max(blackTea, beef, mushrooms)}</span> </div>
        <div class="resData"> Минимальное число <span class="values">${Math.min(blackTea, beef, mushrooms)}</span> </div>
        <div class="resData"> Стоимость всех товаров <span class="values">${total}</span> </div>
        <div class="resData"> Целая часть стоимости всех товаров, округленная в меньшую сторону <span class="values">${Math.floor(total)}</span> </div>
        <div class="resData"> Сумма товаров округленная до сотен <span class="values">${getRoundedValue(total.toFixed(0))}</span> </div>
        <div class="resData"> Сумма всех товаров есть четным (EVEN) или нечетным (ODD) числом <span class="values">${(Math.floor(total) % 2 === 0) ? 'Even': 'Odd'}</span> </div>
        <div class="resData"> Сумма сдачи, при оплате всех товаров (без округления), если клиент <br> платит 500 грн <span class="values">${500-total+' UAH'}</span> </div>
        <div class="resData"> Среднее значение цен, округленное до второго знака после запятой <span class="values">${((total)/3).toFixed(2)}</span> </div>
        <div class="resData"> Скидка дня составляет <span class="values">${discount}</span> </div>
        <div class="resData"> Сумма товаров с учетом скидки <span class="values">${(total*(1-discount)).toFixed(2)}</span> </div>
        <div class="resData"> Упущенная выгода <span class="values">${(Math.floor(total/2)-(Math.floor(total)-Math.floor(total)*(1-discount))).toFixed(2)}</span> </div>
        `
    }
    innerHTML();
    resBtn.addEventListener('click', () => {
        document.querySelector('.data').innerHTML = '';
        resBtn.classList.add('hide');
    });

}

/*
/!*Default style*!/

console.log('Max price is:',Math.max(blackTea, beef, mushrooms)); //Max value
console.log('Min price is:',Math.min(blackTea, beef, mushrooms)); //Min value

let total = blackTea+beef+mushrooms;

console.log('Total price is:', total);
console.log('Rounded to floor price:', Math.floor(total));


function getRoundedValue(sum) {
    let value = sum.toString();
    let lengthValue = value.length;
    let curValue = sum/(10**(lengthValue-1));
    return Math.round(curValue)*10**(lengthValue-1);
}

console.log('Total price, rounded to hundreds: ', getRoundedValue(total.toFixed(0)));

console.log(`Value ${Math.floor(total)} is:`, (Math.floor(total) % 2 === 0) ? 'Even': 'Odd');
console.log('Change from 500 UAH is: ',500-total+' UAH');
console.log('Average price:', ((total)/3).toFixed(2));


let discount = Math.random().toFixed(2);
console.log('Discount is:', discount);
console.log('Price with discount is:', (total*(1-discount)).toFixed(2));
console.log('Lost profit is:', (Math.floor(total/2)-(Math.floor(total)-Math.floor(total)*(1-discount))).toFixed(2));*/
