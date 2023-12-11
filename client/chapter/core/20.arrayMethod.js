/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

console.log(`is array : ${Array.isArray({})}`);

const isArray = (data) => data.isArray(data);
const isNull = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';

function normalIsArray(data) {
  // return Array.isArray(data)
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
  );
}
const arr = [10, 100, 1000, 10000];
const people = [
  {
    id: 0,
    name: 'aaa',
    job: 'fe developer',
    age: 30,
  },
  {
    id: 1,
    name: 'bbb',
    job: 'owner',
    age: 40,
  },
  {
    id: 2,
    name: 'ccc',
    job: 'roommate',
    age: 20,
  },
  {
    id: 3,
    name: 'dddd',
    job: 'gardener',
    age: 30,
  },
];

/* 요소 순환 ---------------------------- */

//* forEach  : 반환값 없음

arr.forEach((item, index) => {
  console.log(item, index);
});

people.forEach((item) => {
  //어떤 타입이 나오는지 확인하고 사용하면 좋다.
  console.log(item.job);
});

const span = document.querySelectorAll('span');
span.forEach((item) => {
  item.addEventListener('click', () => {
    console.log('clicked!');
  });
});

//this.Style.color = 'red'
//* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
// const reverseArray = arr.reverse(); //! 원형도 바뀌어버림
const reversedArray = arr.toReversed(); //^ 최신문법, 원형을 보존

// splice

console.log(arr.toSpliced(1, 2, 'javascript', 'css', 'react'));
// sort

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

//
// const card = people.map((item, index) => {
//   return /* html */ `
//     <div class='userCard card${index}'>
//       <div class="imageField">
//         <img src="${item.imageSrc}.jpg" alt="${item.alt}" />
//       </div>
//       <span>이름 : ${item.name}</span>
//       <span>나이 : ${item.age}</span>
//       <span>직업 : ${item.job}</span>
//     </div>
//   `;
// });

// console.log(card);

// card.forEach((item) => {
//   document.body.insertAdjacentHTML('beforeend', item);
// });
/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find

const findUser = people.find((item) => {
  item.name === 'bbb';
});

console.log(`find: ${findUser}`);
// findIndex

/* 요소 걸러내기 --------------------------- */

// filter 배열만,

const filterUser = people.filter((item) => {
  return item.age < 30;
});
console.log(filterUser);
/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
const totalAge = people.reduce((acc, cur) => acc + cur.age, 0);

const template = people.reduce(
  (htmlCode, cur) => htmlCode + `<div>${cur.name} : ${cur.age} 살</div>`,
  ''
);

// console.log( template );

document.body.insertAdjacentHTML('beforeend', template);

/* string ←→ array 변환 ------------------ */

// split
// join

const str = '종명 예진 현주 지인 훈 은원';

// split : 문자 → 배열
const stringToArray = str.split(' ');
console.log(stringToArray);

// join : 배열 → 문자
const arrayToString = stringToArray.join('-');
console.log(arrayToString);
