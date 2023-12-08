/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;
console.log(`길이 : ${stringTotalLength}`);

// 특정 인덱스의 글자 추출
let extractCharacter = message[5];
console.log(`한글자만추출 : ${extractCharacter}`);

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;
console.log(`B${message.slice(1)}`);

// 부분 문자열 추출
let slice = message.slice(1, 3);
console.log(`부분추출 : ${slice}`);

let subString = message.substring(2, 5);
console.log(`substring : ${subString}`);

let subStr;
// 문자열 포함 여부 확인
let indexOf = message.indexOf('more');
console.log(`indexOf : ${indexOf}`);

function checkBrowser() {
  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch (true) {
    case agent.indexOf('edge') > -1:
      browserName = 'MS Edge';
      break;
    case agent.indexOf('chrome') > -1 && !!window.chrome:
      browserName = 'Chrome';
      break;
    case agent.indexOf('safari') > -1:
      browserName = 'Safari';
      break;
    case agent.indexOf('firefox') > -1:
      browserName = 'firefox';
      break;
    case agent.indexOf('trident') > -1:
      browserName = 'IE';
      break;
  }

  return browserName;
}

let lastIndexOf = message.lastIndexOf('s');
let includes;
let startsWith;
let endsWith;

// 공백 잘라내기
// 공백 잘라내기
let str = '     a   b     c   d   ';

let trimLeft = str.trimStart();
console.log('trimLeft : ', trimLeft);

let trimRight = str.trimEnd();
console.log('trimRight : ', trimRight);

let trim = str.trim();
console.log('trim : ', trim);

let reg = str.replace(/\s*/g, '');
let all = str.replaceAll(' ', '');

console.log(reg);
// 대소문자 변환
let toLowerCase;
let toUpperCase;

// 텍스트 이름 변환 유틸리티 함수
let toCamelCase;
let toPascalCase;
