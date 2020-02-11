const submit = document.getElementById('submit');
const students = ['Сашко', 'Ігор', 'Оленка', 'Іра', 'Олексій', 'Світлана'];
const themes = ['Диференційні рівняння', 'Теорія автоматів', 'Алгоритми та структури даних'];
const marks = [4, 5, 5, 3, 4, 5];
const coupleStudents = [['Сашко', 'Світлана'], ['Ігор', 'Іра'], ['Олексій', 'Оленка']]; /*Я сделал это статично. Не понимаю как создать соответствующую функцию.*/

submit.addEventListener('click', (event) => {
    event.preventDefault();
    document.body.innerText = '';
    createBlock(coupleStudents, 'Сформовані пари студентів');
    createBlock(couplesAndSubject, 'Студенти та їх предмет');
    createBlock(studentsMark, 'Студенти та їх оцінки');
    createBlock(couplesAndMarks, 'Пари студентів з предметами та їх оцінки');
});

/*Create single wrapper block in html*/

function createBlock(array, text) {
    const wrap = document.createElement('div');
    wrap.classList.add('wrapper');
    const description = document.createElement('p');
    description.classList.add('block-description');
    description.textContent = text;
    const usersList = document.createElement('ul');
    usersList.classList.add('users-list');

    const li =  array.map(item => {
        return `<li class = 'users-list__item'>
                    ${item}
                </li>`
    });

   usersList.insertAdjacentHTML("afterbegin", li.join(''));
   wrap.appendChild(description);
   wrap.appendChild(usersList);
   document.body.appendChild(wrap);
}