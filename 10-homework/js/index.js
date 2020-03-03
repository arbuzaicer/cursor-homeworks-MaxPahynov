/*Variables section*/

const strings = document.querySelectorAll('.string');
const sounds = document.querySelectorAll('.sound');
const guitarContainer = document.querySelector('.guitar');

/*Listener*/

guitarContainer.addEventListener('mouseover', (e) => {
    for (let i = 0; i < strings.length; i++) {
        if (e.target === strings[i]) {
            strings[i].addEventListener('mouseleave', function () {
                sounds[i].currentTime = 0;
                sounds[i].play();
            })
        }
    }
});

