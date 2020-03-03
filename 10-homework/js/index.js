/*Variables section*/

const strings = document.querySelectorAll('.string');
const sounds = document.querySelectorAll('.sound');

/*Listener*/

window.addEventListener('mousemove', (e) => {
    for (let i = 0; i < strings.length; i++) {
        if (e.target === strings[i]) {
            sounds[i].currentTime = 0;
            sounds[i].play();
        }
    }
});

