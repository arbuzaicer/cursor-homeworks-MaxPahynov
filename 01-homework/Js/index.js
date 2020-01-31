/*Variables initializing*/
const inp1 = document.querySelector('#val1');
const inp2 = document.querySelector('#val2');
const inp3 = document.querySelector('#val3');
const resBtn = document.getElementById('reset');

document.getElementById('submit').addEventListener('click', getData);


function getData(event) {
    document.body.style.height = '150%';
    event.preventDefault();
    resBtn.classList.remove('hide');
    const blackTea = +inp1.value;
    const beef = +inp2.value;
    const mushrooms = +inp3.value;

    console.log('Max price is:',Math.max(blackTea, beef, mushrooms)); //Max value
    console.log('Min price is:',Math.min(blackTea, beef, mushrooms)); //Min value

    const total = blackTea+beef+mushrooms;

    console.log('Total price is:', total);
    console.log('Rounded to floor price:', Math.floor(blackTea)+Math.floor(beef)+Math.floor(mushrooms));


    function getRoundedValue(sum) {
        const value = sum.toString();
        const lengthValue = value.length;
        const curValue = sum/(10**(lengthValue-1));
        return Math.round(curValue)*10**(lengthValue-1);
    }

    console.log('Total price, rounded to hundreds: ', getRoundedValue(total.toFixed(0)));

    console.log(`Value ${Math.floor(total)} is:`, (Math.floor(total) % 2 === 0) ? 'Even': 'Odd');
    console.log('Change from 500 UAH is: ',500-total+' UAH');
    console.log('Average price:', ((total)/3).toFixed(2));


    const discount = Math.random().toFixed(2);
    console.log('Discount is:', discount);
    console.log('Price with discount is:', (total*(1-discount)).toFixed(2));
    console.log('Lost profit is:', (Math.floor(total/2)-(Math.floor(total)-Math.floor(total)*(1-discount))).toFixed(2));

    function innerHTML() {
        document.querySelector('.data').innerHTML = `
        <div class="resData"> <div class="textField">Максимальное число</div> <div class="values">${Math.max(blackTea, beef, mushrooms)}</div> </div>
        <div class="resData"> <div class="textField">Минимальное число</div> <div class="values">${Math.min(blackTea, beef, mushrooms)}</div> </div>
        <div class="resData"> <div class="textField">Стоимость всех товаров</div> <div class="values">${total}</div> </div>
        <div class="resData"> <div class="textField">Целая часть стоимости всех товаров, округленная в меньшую сторону</div> <div class="values">${Math.floor(blackTea)+Math.floor(beef)+Math.floor(mushrooms)}</div> </div>
        <div class="resData"> <div class="textField">Сумма товаров округленная до сотен</div> <div class="values">${getRoundedValue(total.toFixed(0))}</div> </div>
        <div class="resData"> <div class="textField">Сумма всех товаров есть четным (EVEN) или нечетным (ODD) числом</div> <div class="values">${(Math.floor(total) % 2 === 0) ? 'Even': 'Odd'}</div> </div>
        <div class="resData"> <div class="textField">Сумма сдачи, при оплате всех товаров (без округления), если клиент платит 500 грн </div> <div class="values">${500-total+' UAH'}</div> </div>
        <div class="resData"> <div class="textField">Среднее значение цен, округленное до второго знака после запятой</div> <div class="values">${((total)/3).toFixed(2)}</div> </div>
        <div class="resData"> <div class="textField">Скидка дня составляет</div> <div class="values">${discount}</div> </div>
        <div class="resData"> <div class="textField">Сумма товаров с учетом скидки</div> <div class="values">${(total*(1-discount)).toFixed(2)}</div> </div>
        <div class="resData"> <div class="textField">Упущенная выгода</div> <div class="values">${(Math.floor(total/2)-(Math.floor(total)-Math.floor(total)*(1-discount))).toFixed(2)}</div> </div>
        `
    }
    innerHTML();
    resBtn.addEventListener('click', () => {
        document.querySelector('.data').innerHTML = '';
        document.body.style.height = '100vh';
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
