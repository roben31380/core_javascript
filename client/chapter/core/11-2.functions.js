/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (a, b, c, d) {
  // console.log(arguments);
  let total = 0;
  // for

  // for (let i = 0; i < arguments.length; i++) {
  //   total += arguments[i];
  // }

  // for of

  // for (let value of arguments) {
  //   total += value;
  // }

  //빌려쓰기 일회성
  // Array.prototype.forEach.call(arguments, function (item) {
  //   total += item;
  // });

  // arg의 부모 자체를 배열로 바꿔버리면?
  // arguments.__proto__ = Array.prototype;

  // 유새배열을 진짜 배열로 만들기
  // const arr = Array.prototype.slice.call(arguments); instance 빌려쓰기
  // const arr = Array.from(arguments); static 바로 쓰기
  // spread syntax
  const arr = [...arguments];

  // for each 값을 반환하지 않음

  // arr.forEach(function (item) {
  //   total += item;
  // });

  // 화살표
  arr.forEach((item) => (total += item));

  // map ; 배열만 반환
  // reduce 값을 반환, 코드가 줄어들어서 reduce
  arr.reduce((acc, cur) => acc + cur, 0);

  return total;
};

const arr = ['김다영', '이경화', '김용범'];

// const newArr = ['김다영-hi','이경화-hi','김용범-hi'];

// let name = [];

// arr.forEach(function(item){
//   name.push(item + '-hi')
// })

// console.log(name);

// const name = arr.reduce(function(acc,cur){

//   acc.push(cur + '-hi');

//   return acc;
// },[])

// console.log( name );

const name = arr.map(function (item) {
  return item + '-hi';
});

console.log(name);

const result = calculateTotal(1000, 2300, 5000, 1500);
console.log(result);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;

// 콜백 함수 (표현)식
let cb = function (isActive, success, fail) {
  // let isActive = false;
  // let success = function(){
  //   console.log('성공!')
  //  }
  // let fail = function(){
  //   console.log('error')
  //  }

  if (isActive) success();
  else fail();
  // isActive ? success() : fail()
};

cb(
  false,
  function () {
    console.log('성공!');
  },
  function () {
    console.log('실패!');
  }
);

function movePage(url, success, fail) {
  if (url.match(/http.+www/) && typeof url === 'string') {
    success(url);
  } else {
    fail({ message: '에러입니다.' });
  }
}

movePage(
  'https://www.naver.com',
  function (url) {
    console.log(url + ' 이동');
  },
  function (err) {
    console.log(err.message);
  }
);

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식 선언과 동시에 실행
// Immediately Invoked Function Expression
let IIFE;

(function a() {})();

let c = 10;
