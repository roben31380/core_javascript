/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode =
  /* css */
  `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: 800,
  height: '40vh',
  minHeight: 280,
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: 'user-id-asekqwkemqi',
  name: 'tiger',
  email: 'kina@kinale.com',
  isSingIn: false,
  permission: 'paid',
};
// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

/* console.log(authUser.uid);
console.log(authUser['uid']);
console.log(authUser.name);
console.log(authUser['name']);
console.log(authUser.email);
console.log(authUser['email']);
console.log(authUser.isSingIn);
console.log(authUser['isSingIn']);
console.log(authUser.permission);
console.log(authUser['permission']);
 */

authUser['PUR'] = true;
console.log(authUser.PUR);

// Object.prototype.SIGN = true;

for (let key in authUser) {
  if ({}.hasOwnProperty.call(authUser, key)) {
    console.log('2.' + key);
    console.log('3.' + authUser[key]);
  }
}

// key를 모아놓은 배열
let keyList = Object.keys(authUser);
console.log('4.' + keyList);
// value를 모아놓은 배열
let valueList = Object.values(authUser);
console.log('5.' + valueList);

const result = getPropertiesList(authUser);

// 계산된 프로퍼티 (computed property) 프로퍼티의 key를 표현식을 통해 동적으로 지정하는 문법
let calculateProperty = 'tel'; // phone | tel

function createUser(name, age, phone = '010-0000-0000') {
  return {
    name,
    age,
    [calculateProperty]: phone,
  };
}

const user = createUser('tiger', '35');

// 프로퍼티 포함 여부 확인
// 이전 방법
function getPropertiesList(object) {
  let result = [];

  for (let key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

// 현재 isObject의 toString
/* function isObject(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'object'
  );
} */

// 프로퍼티 나열 Object.entries()

// 프로퍼티 제거(remove = null) or 삭제(delete)
function removeProperty(object, key) {
  if (isObject(object)) {
    object[key] = null;
  }
}

removeProperty(authUser, 'name'); // authUser.name = null;

function deleteProperty(object, key) {
  delete object[key];
}
//deleteProperty(authUser,'name') // delete authUser.name

// 단축 프로퍼티
// let name = '선범';
// let email = 'seonbeom2@euid.dev';
// let authorization = 'Lv. 99';
// let isLogin = true;

// const student = {
//   name,
//   email,
//   authorization,
//   isLogin: false,
// };
// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */
// 순서 바꿀수 없음, 변수 이름을 바꿀수 있음

const arr = [10, 100, 1000, 10000];

// const a1 = arr[0];
// const a2 = arr[1];
// const a3 = arr[3];
// const a4 = arr[4];

const [a1, ...d] = arr;

console.log(a1);

for (let [key, value] of Object.entries(authUser)) {
  // let key = keyValue[0];
  // let value = keyValue[1];

  console.log('6.' + key);
}

const [first, second, third] = document.querySelectorAll('span'); // NodeList

// const first = document.querySelector('.first');
// const second = document.querySelector('.second');
// const third = document.querySelector('.third');

const salaries = {
  a: 100,
  b: 200,
  c: 300,
};

let total = 0;
for (let [key, value] of Object.entries(salaries)) {
  total += value;
}
console.log(total);

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const salaries1 = {
  a: 100,
  b: 200,
  c: 300,
};

const { a: aa, b: bb, c: cc, d: dd = 500 } = salaries1;

// console.log(aa);
// console.log(dd);

const test = {
  testA: {
    testB: {
      testC: {
        value: 10,
      },
    },
  },
};

const { value: testValue } = test.testA.testB.testC;
// console.log(testValue);

function createUserData(obj) {
  console.log(obj);
  const { userName, age, job } = obj;
  return {
    userName,
    age,
    job,
  };
}

const { userName, age, job } = {
  userName: 'tiger',
  age: 40,
  job: 'developer',
};
