/*Variables initializing*/
const inp1 = document.querySelector('#val1');
const inp2 = document.querySelector('#val2');
const inp3 = document.querySelector('#val3');
const resBtn = document.getElementById('reset');

document.getElementById('submit').addEventListener('click', getDataHandler);

function getDataHandler(event) {
    event.preventDefault();
    document.body.style.height = '150%';
    resBtn.classList.remove('hide');
    document.querySelector('.data').innerHTML = innerHTML();

    resBtn.addEventListener('click', () => {
        document.querySelector('.data').innerHTML = '';
        document.body.style.height = '100vh';
        resBtn.classList.add('hide');
    });
}

/*Privacy functions section*/

function getRoundedValue(sum) {
    const value = sum.toString();
    const lengthValue = value.length;
    const curValue = sum / (10 ** (lengthValue - 1));
    return Math.round(curValue) * 10 ** (lengthValue - 1);
}

function innerHTML() {
    /*Variables section*/
    const blackTea = +inp1.value;
    const beef = +inp2.value;
    const mushrooms = +inp3.value;
    const total = blackTea + beef + mushrooms;
    const discount = Math.random().toFixed(2);
    const maxValue = Math.max(blackTea, beef, mushrooms);
    const minValue = Math.min(blackTea, beef, mushrooms);
    const averageRounded = Math.floor(blackTea) + Math.floor(beef) + Math.floor(mushrooms);
    const isEven = (Math.floor(total) % 2 === 0) ? 'Even' : 'Odd';
    const paymentValue = 500;
    const restValue = paymentValue - total + ' UAH';
    const averageValue = ((total) / 3).toFixed(2);
    const randomDiscount = discount * 100;
    const totalDiscountPrice = (total * (1 - discount)).toFixed(2);
    const profit = (Math.floor(total / 2) - (Math.floor(total) - Math.floor(total) * (1 - discount))).toFixed(2);

    return `
        <div class="resData"> <div class="textField">Максимальное число</div> <div class="values">${maxValue}</div> </div>
        <div class="resData"> <div class="textField">Минимальное число</div> <div class="values">${minValue}</div> </div>
        <div class="resData"> <div class="textField">Стоимость всех товаров</div> <div class="values">${total}</div> </div>
        <div class="resData"> <div class="textField">Целая часть стоимости всех товаров, округленная в меньшую сторону</div> <div class="values">${averageRounded}</div> </div>
        <div class="resData"> <div class="textField">Сумма товаров округленная до сотен</div> <div class="values">${getRoundedValue(total.toFixed(0))}</div> </div>
        <div class="resData"> <div class="textField">Сумма всех товаров есть четным (EVEN) или нечетным (ODD) числом</div> <div class="values">${isEven}</div> </div>
        <div class="resData"> <div class="textField">Сумма сдачи, при оплате всех товаров (без округления), если клиент платит 500 грн </div> <div class="values">${restValue}</div> </div>
        <div class="resData"> <div class="textField">Среднее значение цен, округленное до второго знака после запятой</div> <div class="values">${averageValue}</div> </div>
        <div class="resData"> <div class="textField">Скидка дня составляет</div> <div class="values">${randomDiscount}%</div> </div>
        <div class="resData"> <div class="textField">Сумма товаров с учетом скидки</div> <div class="values">${totalDiscountPrice}</div> </div>
        <div class="resData"> <div class="textField">Упущенная выгода</div> <div class="values">${profit}</div> </div>
        `
}