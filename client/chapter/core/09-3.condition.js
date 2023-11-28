/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = DAWN;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

switch (thisTime) {
  case MORNING:
    console.log('turn on discord');
    break;
  case LUNCH:
    console.log('eat lunch');
    break;
  case DINNER:
    console.log('zzz');
    break;
  case NIGHT:
    console.log('chat with friends');
    break;
  case LATE_NIGHT:
  case DAWN:
    console.log('zzz');
    break;
}

/* switch문 → if문 변환 --------------------------------------------------- */
if (thisTime === MORNING) {
  console.log('turn on discord');
} else if (thisTime === LUNCH) {
  console.log('eat lunch');
} else if (thisTime === DINNER) {
  console.log('zzz');
} else if (thisTime === NIGHT) {
  console.log('chat with friends');
} else thisTime === LATE_NIGHT || thisTime === DAWN;
{
  console.log('zzz');
}

/* switch vs. if -------------------------------------------------------- */
function getRandom(n) {
  return Math.floor(Math.random() * (n + 1));
}

function getDay(num) {
  switch (num) {
    case 0:
      return '일';

    case 1:
      return '월';

    case 2:
      return '화';

    case 3:
      return '수';

    case 4:
      return '목';

    case 5:
      return '금';

    case 6:
      return '토';
  }
}

function weekend() {
  const today = getDay(getRandom(6));

  console.log(today);

  /*   if (today.includes('토')) {
    return '토요일';
  } else if (today.includes('일')) {
    return '일요일';
  } else {
    return '평일';
  } */

  return today.includes('토')
    ? '토요일'
    : today.includes('일')
      ? '일요일'
      : '평일';
}

const todayIs = weekend();
console.log(todayIs);
