import { getNodes, getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './typeOf.js';
// 이상원, 박수양, 조윤주, 정현주, 박주현

getNodes;
function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

/* first.style.top = '-100px';
first.style.transform = 'rotate(360deg)';
first.style.top = '0'; */

//!콜백지옥
/* delay(() => {
  first.style.top = '-100px';

  delay(() => {
    first.style.transform = 'rotate(360deg)';
    delay(() => {
      first.style.top = '0px';
    });
  });
}); */

//*promise API

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '아싸 성공!',
  errorMessage: '알 수 없는 오류가 발생했습니다.',
};

export function delayP(options) {
  let config = { ...defaultOptions };

  if (isNumber(options)) {
    config.timeout = options;
  }

  if (isObject(options)) {
    config = { ...defaultOptions, ...options };
  }

  let { shouldReject, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        resolve(data);
      } else {
        reject({ message: errorMessage });
      }
    }, timeout);
  });
}

delayP()
  .then(
    (resolve) => {
      //성공한 결과값을 반환
      // console.log(resolve);
    } /* ,
    (reject) => {
      console.log(reject);
    } */
  )
  .catch((err) => console.log(err)); // 에러를 반환

//* async - 함수가 promise 객체를 반환 하도록
//*       - await 사용 -> promise 객체

//* await - 코드의 실행 흐름 제어 (멈춤)
//*       - result값 가져오기

async function delayA(data) {
  return data;
}

const value = await delayA('나');

// value.then((res)=>{
//   console.log(res);
// })

// console.log(value);

function 라면끓이기() {
  // delayP({data:'물'})
  // .then((res)=>{
  //   console.log( res );
  //   return delayP({data:'스프'})
  // })
  // .then((res)=>{
  //   console.log( res );
  //   return delayP({data:'면넣기'})
  // })
  // .then((res)=>{
  //   console.log( res );
  //   return delayP({data:'그릇에담기'})
  // })
  // .then((res)=>{
  //   console.log( res );
  // })
  // console.log('물넣기');
  // console.log('스프넣기');
  // console.log('면넣기');
  // console.log('그릇에담기');
}

/* const 물 = await delayP({ data: '물' });
console.log(물);

const 스프 = await delayP({ data: '스프' });
console.log(스프);

const 면 = await delayP({ data: '면' });
console.log(면);

const 그릇 = await delayP({ data: '그릇' });
console.log(그릇); */

async function getData() {
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/15');

  // console.log(data);

  // insertLast(
  //   document.body,
  //   `<img src="${data.sprites['front_default']}" alt="독침붕" />`
  // );

  // console.log(data.sprites['front_default']);
}

const END_POINT = 'https://pokeapi.co/api/v2/pokemon/15';

async function getDataA() {
  let data = await fetch(END_POINT);
  console.log(data);
}

getDataA();
