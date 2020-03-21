import Cursor from "../img/cursor-logo.jpg";

export default function setDescription() {
    const description = document.createElement('p');
    description.innerHTML = `На даній сторінці буде наведено приклад роботи функцій на кожну зі зроблених ДЗ по курсу Front-end розробки від <a
        class="cursor-logo" href="https://cursor.education/uk" target="_blank" title="Cursor Edu"><img src=${Cursor} alt="cursorEdu"></a>`;
    document.querySelector('.description').appendChild(description)
}