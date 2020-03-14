/*Imports*/
import {DAL} from './DAL/DAL-connection.js'
import createCharacterCard from './copmonents/characterCardInfo.js'

/*Variables initializing*/
const getInfoBtn = document.getElementById('get-information');
const selectEpisodeInput = document.getElementById('select-episode');
const firstWindow = document.querySelector('.upload-characters__window');
const resultData = document.querySelector('.result-data__window');
const backBtn = document.querySelector('.custom-btn');
const buttonContainer = document.querySelector('.button-back');
const nextBtn = document.querySelector('.next');

getInfoBtn.addEventListener('click', getInfoHandler);
backBtn.addEventListener('click', clearDataHandler);

nextBtn.addEventListener('click', ()=> {
    DAL.getPlanetsInfo()
        .then(data=> {
            console.log(data)
        })
})

function getInfoHandler() {
    firstWindow.classList.toggle('hide');
    buttonContainer.classList.toggle('hide');
    let characters = DAL.getMoovieInfo(selectEpisodeInput.value);

    characters
        .then(data => {
            data.characters.forEach(async (item) => {
                const request = await fetch(item, {
                    'Access-Control-Allow-Origin': 'http://localhost:63342'
                });
                const response = await request.json();
                const characterData = [response.name, response.birth_year, response.gender];
                createCharacterCard(characterData, resultData)
            })
        })
}

function clearDataHandler() {
    firstWindow.classList.toggle('hide');
    buttonContainer.classList.toggle('hide');
    resultData.innerHTML = '';
}