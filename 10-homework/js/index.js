const playingButtons = ["Numpad6", "Numpad5", "Numpad4", "Numpad3", "Numpad2", "Numpad1"];

class eventsDOM {
    constructor(play) {
        this.play = play;
        this.isRulesOpen = true;
        this.openBtn = document.getElementById('rules-openBtn');
        this.closeBtn = document.getElementById('rules-closeBtn');
        this.rulesSection = document.querySelector('.rules-container');
        this.closeBtn.addEventListener('click', this._closeRules.bind(this));
        window.addEventListener('keyup', this._escClose.bind(this));
        this.openBtn.addEventListener('click', () => {
            this._closeRules();
        });
    }

    _closeRules() {
        this.isRulesOpen = !this.isRulesOpen;
        this.play;
        this.rulesSection.classList.toggle('close');
        this.openBtn.style.display = this.isRulesOpen
            ? 'none'
            : 'block';
    }
    
    _escClose(event) {
        if (event.code === 'Escape') {
            this._closeRules()
        }
    }
}

class Guitar {
    constructor(buttons) {
        this.guitarContainer = document.querySelector('.guitar');
        this.strings = document.querySelectorAll('.string-single');
        this.sounds =  [
            new Audio('./sounds/String6.wav'),
            new Audio('./sounds/String5.wav'),
            new Audio('./sounds/String4.wav'),
            new Audio('./sounds/String3.wav'),
            new Audio('./sounds/String2.wav'),
            new Audio('./sounds/String1.wav')
        ];
        this.stringsButtons = buttons;
        this.isStringActive = false;
    }

    _play() {
        this.guitarContainer.addEventListener('mouseover', this.mousePlaying.bind(this));
        window.addEventListener('keyup', this.buttonsPlaying.bind(this))
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

    stringActiveFunc(iter) {
        if (this.isStringActive) {
            this.strings[iter].classList.add('active');
        } else {
            this.strings[iter].classList.remove('active')
        }
    }

    addStringStyles(iter) {
        const stringAnimationTimeOut = 250;
        this.stringSound(iter);
        this.isStringActive = true;
        this.stringActiveFunc(iter);
        setTimeout(() => {
            this.isStringActive = false;
            this.stringActiveFunc(iter);
        }, stringAnimationTimeOut)
    }
}

const guitar = new Guitar(playingButtons);
const activatingGuitar = new eventsDOM(guitar._play());

const testValueFromHW10 = 123;
export default testValueFromHW10;


