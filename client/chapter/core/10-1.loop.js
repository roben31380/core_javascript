/* --------------- */
/* While Loop      */
/* --------------- */

/* let l = 0;
while (l < 3) {
  console.log(l);
  l++;
} */

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
  'react Native',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);
// console.log(frontEndDev[6]);

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

let i = 0;
while (i < frontEndDev.length) {
  let value = frontEndDev[i];
  // console.log(value);
  i++;
}
// while 문 (역순환 : 역방향)

let l = frontEndDev.length - 1;
while (l >= 0) {
  let value = frontEndDev[l--];
  console.log(value);
}

// 성능 진단 : 순환 vs. 역순환

/* let word = prompt('단어를 입력');
let reverse = word.split('').reverse('').join('');
console.log(reverse); */

/* 유주는 놀이공원 아르바이트 중입니다. 그런데 놀이기구마다 키 제한이 있습니다.
유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있습니다.

입력으로 키가 주어지면
키가 150이 넘으면 YES를 틀리면 NO를 출력하는 프로그램을 작성하세요. */

// let height = prompt('how tall are you?');

// +height >= 150 ? console.log('YES') : console.log('NO');
