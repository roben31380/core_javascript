import {
  attr,
  clearContents,
  diceAnimation,
  endScroll,
  getNode,
  getNodes,
  insertLast,
  memo,
} from './lib/index.js';

//* [phase-1]
//^ 1. 주사위굴리기
//^ 2. 주사위굴리기 버튼 클릭하면 ㅇ돌아가게

const [roll, record, reset] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');
let count = 0;
let total = 0;

function createItem(value) {
  const template = `
  <tr>
    <td>${++count}</td>
    <td>${value}</td>
    <td>${(total += value)}</td>
  </tr>
`;
  return template;
}

function renderRecordItem() {
  const diceValue = getNode('#cube').dataset.dice * 1;

  insertLast('.recordList tbody', createItem(diceValue));
  endScroll(recordListWrapper);
}

//^ toggle, closure
const handleRollingDice = (() => {
  let isclicked = false;
  let stopAnimation;

  return () => {
    if (!isclicked) {
      //실행
      stopAnimation = setInterval(diceAnimation, 500);
      record.disabled = true;
      reset.disabled = true;
    } else {
      //정지
      clearInterval(stopAnimation);
      record.disabled = false;
      reset.disabled = false;
    }
    isclicked = !isclicked;
  };
})();

//^ record button 1) 주사위의 값을 가져오고 tag를 만들고 html에 넣음
function handleRecord() {
  recordListWrapper.hidden = false;

  renderRecordItem();
}

//^ reset button
function handleReset() {
  recordListWrapper.hidden = true;
  clearContents(getNode('tbody'));
  count = 0;
  total = 0;
}

roll.addEventListener('click', handleRollingDice);
record.addEventListener('click', handleRecord);
reset.addEventListener('click', handleReset);
