class Guitar {
    constructor() {
        this.guitarContainer = document.querySelector('.guitar');
        this.strings = document.querySelectorAll('.string');
        this.sounds = document.querySelectorAll('.sound');
        this.stringsButtons = ["Numpad6", "Numpad5", "Numpad4", "Numpad3", "Numpad2", "Numpad1"];
    }

    _play() {
        this.guitarContainer.addEventListener('mouseover', this.mousePlaying.bind(this));
        window.addEventListener('keyup', this.buttonsPlaying.bind(this))
    }

    mousePlaying(event) {
        for (let i = 0; i < this.strings.length; i++) {
            if (event.target === this.strings[i]) {
                this.strings[i].addEventListener('mouseleave', () => {
                    this.stringSound(i);
                })
            }
        }
    }

    buttonsPlaying(event) {
        for (let i = 0; i < this.stringsButtons.length; i++) {
            if (event.code === this.stringsButtons[i]) {
                this.stringSound(i);
            }
        }
    }

    stringSound(iter) {
        this.sounds[iter].currentTime = 0;
        this.sounds[iter].play();
    }
}

const guitar = new Guitar();
guitar._play();

