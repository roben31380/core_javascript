import { getNode } from './lib/dom/getNode.js';
import clearContents from './lib/dom/clear.js';

// const firstNumber = document.body.querySelector('#firstNumber');

const firstNumber = getNode('#firstNumber');
const secondNumber = document.body.querySelector('#secondNumber');
const result = document.body.querySelector('.result');
const clear = getNode('#clear');

function handleInput() {
  const firstValue = +firstNumber.value;
  const secondValue = +secondNumber.value;
  const total = firstValue + secondValue;

  clearContents(result);
  result.insertAdjacentHTML('beforeend', total);
}

function hadleClear(e) {
  e.preventDefault();
  clearContents(firstNumber);
  clearContents(secondNumber);
  result.textContent = '-';
}

firstNumber.addEventListener('input', handleInput);
secondNumber.addEventListener('input', handleInput);
clear?.addEventListener('click', hadleClear);

/* const calculator = getNode('.calculator');
const result = getNode('.result');
const clear = getNode('#clear');
const numberInputs = Array.from(getNodes('input:not(#clear)'));



function handleInput(){

  const total = numberInputs.reduce((acc,cur)=> acc + Number(cur.value) ,0);

  clearContents(result)
  insertLast(result,total);
}


function handleClear(e){

  e.preventDefault();
  
  numberInputs.forEach(clearContents);
  result.textContent = '-'

}


calculator.addEventListener('input',handleInput);
clear.addEventListener('click',handleClear); */
