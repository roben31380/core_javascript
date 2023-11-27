/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const year = 2024;
String(year);
// year + '';

// undefined, null
let days = null;
let weekend;

// boolean
let isclicked = true;

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend));

// null
let money = null;
console.log(Number(money));

// boolean
let us = false;
console.log(Number(us));

// string
let num = 250;
console.log(+num);
console.log(num * 1);
console.log(num / 1);

// numeric string
const width = '105.3px';
console.log(parseInt(width, 10));
console.log(parseFloat(width));
/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN false
// '', '0' true
// 위에 나열한 것 이외의 것들
