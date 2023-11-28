/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB);
// a &&= b;

// 논리합(또는) 연산자
let AorB = a || b;
// a ||= b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };

function login() {
  let userName = prompt('누구세요?');

  if (!userName) return;

  if (userName?.toLowerCase() === 'admin') {
    let passWord = prompt('비밀번호를 입력하세요');
    if (passWord === 'theMaster') {
      alert('Welcome!');
    } else {
      alert('Wrong password!');
    }
  } else if (userName === null || userName.replace(/\s*/g, '') === '') {
    alert('취소되었습니다.');
  } else {
    alert(`I don't know you`);
  }
}
