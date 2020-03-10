export default function inputValidation() {
    const validators = Array.from(arguments);
    validators.forEach(item => {
        if (!item || item < 0) {
            alert('Ввєді валідна чісло!!!');
            return false;
        }
    });
    return true;
}