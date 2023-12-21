import { insertLast, tiger, xhrPromise } from './lib/index.js';

xhrPromise.get('https://jsonplaceholder.typicode.com/users').then((res) => {
  res.forEach((item) => {
    insertLast(document.body, `<div>${item.name}</div>`);
  });
});

const TEST_DATA = 'https://jsonplaceholder.typicode.com/users'

const response =
 fetch(TEST_DATA) {}




const END_POINT = 'https://pokeapi.co/api/v2/pokemon/15';

async function getDataA() {
  let data = await fetch(END_POINT);
  console.log(await data);
}

getDataA();
