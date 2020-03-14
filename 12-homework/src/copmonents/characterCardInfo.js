const createCharacterCard = (props, el) => {
    const charactersData = props;
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('character-card');

    charactersData.forEach(item => {
        const field = document.createElement('div');
        field.classList.add('character-card__field');
        field.textContent = item;
        cardContainer.appendChild(field)
    });

    el.appendChild(cardContainer)
};


export default createCharacterCard;