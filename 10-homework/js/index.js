class Guitar {
    constructor() {
        this.guitarContainer = document.querySelector('.guitar');
        this.strings = document.querySelectorAll('.string-single');
        this.sounds = document.querySelectorAll('.sound');
        this.stringsButtons = ["Numpad6", "Numpad5", "Numpad4", "Numpad3", "Numpad2", "Numpad1"];
        this.isStringActive = false;
        this.isRulesOpen = true;
        this.openBtn = document.getElementById('rules-openBtn');
        this.closeBtn =  document.getElementById('rules-closeBtn');
        this.closeBtn.addEventListener('click', this._closeRules.bind(this));
        this.openBtn.addEventListener('click', () => {
            this._closeRules();
        })
    }

    _closeRules() {
        this.isRulesOpen = !this.isRulesOpen;
        this._play();
        document.querySelector('.rules-container').classList.toggle('close');
        this.isRulesOpen ? this.openBtn.style.display = 'none' : this.openBtn.style.display = 'block';
    }

    _play() {
        if (!this.isRulesOpen) {
            this.guitarContainer.addEventListener('mouseover', this.mousePlaying.bind(this));
            window.addEventListener('keyup', this.buttonsPlaying.bind(this))
        }
    }

    mousePlaying(event) {
        this.strings.forEach((singleString, i) => {
            singleString.addEventListener('mouseleave', () => {
                this.addStringStyles(i);
            })
        })
    }

    buttonsPlaying(event) {
        this.stringsButtons.forEach((singleBtn, i) => {
            if (event.code === singleBtn) {
                this.addStringStyles(i);
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

    addStringStyles(iter) {
        this.stringSound(iter);
        this.isStringActive = true;
        this.isStringActiveFunc(iter);
        setTimeout(() => {
            this.isStringActive = false;
            this.isStringActiveFunc(iter);
        }, 250)
    }
}

const guitar = new Guitar();

