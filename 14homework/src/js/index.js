/*Imports*/

import setDescription from "./addDescription";
import {someValueHW1} from "../../../01-homework/Js";
import {calculate} from "../../../02-homework/Js";
import {valueFromHW3} from "../../../03-homework/js/exportTesting";
import {studentsMark} from "../../../04-homework/js/functions";
import {getRandomArray} from "../../../05-homework/js/functions";
import {getBestStudent, students} from '../../../06-homework/js/functions'
import {getMiddleTaxes, latvia} from "../../../07-homework/js/index"
import {studIvan} from "../../../08-homework/js";
import {generateColor} from "../../../09-homework/js"
import testValueFromHW10 from "../../../10-homework/js";
import {testFunctionFrom11HW} from "../../../11-homework/js/validation"
import {DAL} from "../../../12-homework/src/DAL/DAL-connection";
import {idGenerator} from "../../../13-homework/js";

setDescription(); //add description to header section

/*Variables*/

const hw1Btn = document.getElementById('hw1');
const hw2Btn = document.getElementById('hw2');
const hw3Btn = document.getElementById('hw3');
const hw4Btn = document.getElementById('hw4');
const hw5Btn = document.getElementById('hw5');
const hw6Btn = document.getElementById('hw6');
const hw7Btn = document.getElementById('hw7');
const hw8Btn = document.getElementById('hw8');
const hw9Btn = document.getElementById('hw9');
const hw10Btn = document.getElementById('hw10');
const hw11Btn = document.getElementById('hw11');
const hw12Btn = document.getElementById('hw12');
const hw13Btn = document.getElementById('hw13');

/*Listeners*/

hw1Btn.addEventListener('click', () => setResultData('.hw1', someValueHW1));
hw2Btn.addEventListener('click', () => setResultData('.hw2', calculate(10, 15, true)));
hw3Btn.addEventListener('click', () => setResultData('.hw3', valueFromHW3));
hw4Btn.addEventListener('click', () => setResultData('.hw4', studentsMark));
hw5Btn.addEventListener('click', () => setResultData('.hw5', getRandomArray(5, 24, 58)));
hw6Btn.addEventListener('click', () => setResultData('.hw6', getBestStudent(students)));
hw7Btn.addEventListener('click', () => setResultData('.hw7', getMiddleTaxes.call(latvia)));
hw8Btn.addEventListener('click', () => setResultData('.hw8', studIvan.getAverageMark()));
hw9Btn.addEventListener('click', () => setResultData('.hw9', generateColor()));
hw10Btn.addEventListener('click', () => setResultData('.hw10', testValueFromHW10));
hw11Btn.addEventListener('click', () => setResultData('.hw11', testFunctionFrom11HW()));
hw12Btn.addEventListener('click', async () => setResultData('.hw12', await DAL.getMoovieInfo(5).then(data => JSON.stringify(data).substr(0, 60) + '...')));
hw13Btn.addEventListener('click', () => setResultData('.hw13', JSON.stringify(idGenerator.next())));

/*Private function*/

function setResultData(el, param) {
    const resultBlock = document.querySelector(el);
    resultBlock.innerHTML = '';
    const infoBlock = document.createElement('p');
    infoBlock.classList.add('result-data');
    infoBlock.textContent = param;
    resultBlock.appendChild(infoBlock);
}
