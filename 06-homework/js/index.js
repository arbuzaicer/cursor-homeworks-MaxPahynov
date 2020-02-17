const container = document.querySelector('.container');

/*Generating students*/

const studentSingle = students.map((stud, i) => {

    return `
    <div class="single-user">
    
    <div class="front-card">
        <div class="user-info">
    <img class="user-logo" src=${stud.gender === 'female'
        ? 'https://icons-for-free.com/iconfiles/png/512/female+person+user+woman+young+icon-1320196266256009072.png'
        : 'https://i.pinimg.com/originals/af/25/49/af25490494d3338afef00869c59fdd37.png'} alt="user-icon">
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

