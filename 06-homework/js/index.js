const container = document.querySelector('.container');

/*Generating students*/

const studentSingle = students.map((stud, i) => {

    return `
    <div class="single-user">
    
    <div class="front-card">
        <div class="user-info">
    <img class="user-logo" src=${stud.gender === 'female'
        ? './images/female-user-icon.png'
        : './images/male-user-icon.png'} alt="user-icon"+${i}>
    <h2 class="user-name">${stud.name}</h2>
</div>
</div>

    <div class="back-card">
    <div class="user-data">
    <p class="stud-info">Курс: ${stud.course}</p>
    <p class="stud-info">Предмети: ${getSubjects(stud)}</p>
    <p class="stud-info">Середній бал: ${getAverageMark(stud)}</p>

</div>
</div>
</div> 

`
}).join('');

container.insertAdjacentHTML("afterbegin", studentSingle);

