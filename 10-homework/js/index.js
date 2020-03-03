class Guitar {
    constructor() {
        this.guitarContainer = document.querySelector('.guitar');
        this.strings = document.querySelectorAll('.string-single');
        this.sounds = document.querySelectorAll('.sound');
        this.stringsButtons = ["Numpad6", "Numpad5", "Numpad4", "Numpad3", "Numpad2", "Numpad1"];
        this.isStringActive = false;
    }

    _play() {
        this.guitarContainer.addEventListener('mouseover', this.mousePlaying.bind(this));
        window.addEventListener('keyup', this.buttonsPlaying.bind(this))
    }

    mousePlaying(event) {
        this.strings.forEach((singleString, i) => {
            singleString.addEventListener('mouseleave', () => {
                this.stringSound(i);
                this.isStringActive = true;
                this.isStringActiveFunc(i);
                setTimeout(() => {
                    this.isStringActive = false;
                    this.isStringActiveFunc(i);
                }, 250)
            })
        })
    }

    buttonsPlaying(event) {
        this.stringsButtons.forEach((singleBtn, i) => {
            if (event.code === singleBtn) {
                this.stringSound(i);
                this.isStringActive = true;
                this.isStringActiveFunc(i);
                setTimeout(() => {
                    this.isStringActive = false;
                    this.isStringActiveFunc(i);
                }, 250)
            }
        })
    }

    stringSound(iter) {
        this.sounds[iter].currentTime = 0;
        this.sounds[iter].play();
    }

    isStringActiveFunc(iter) {
        if (this.isStringActive) {
            this.strings[iter].classList.add('active');
        }
        if (!this.isStringActive) {
            this.strings[iter].classList.remove('active')
        }
    }
}

const guitar = new Guitar();
guitar._play();

