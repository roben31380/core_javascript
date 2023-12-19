import jujeobData from './data/data.js';
import {
  getNode,
  getRandom,
  isNumeticString,
  showAlert,
  shake,
  insertLast,
  clearContents,
  copy,
} from './lib/index.js';

//* [phase-1]
//^ 1. 주접 떨기 버튼을 클릭할 수 있는 핸들러를 연결해 주세요.
//^ 2. nameField에 있는 값을 가져와 주세요.
//^ 3. 주접데이터연결
//^ 4. 랜덤주접가져오기

//*[phase-2]
//^ 1. 아무것도 입력받지 못했을때 에외처리
//^ 2.공백문자 처리

//*[phase-3]
//^ copy

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const result = getNode('.result');

function handleSubmit(e) {
  e.preventDefault();
  const name = nameField.value;
  const list = jujeobData(name);
  const pick = jujeobData(name)[getRandom(list.length)];

  if (!name || name.replace(/\s*/g, '') === '') {
    console.log('error!');
    showAlert('.alert-error', '이름을 입력해주세요!', 1500);
    shake.restart();

    return;
  }

  if (!isNumeticString(name)) {
    showAlert('.alert-error', '알맞은 이름을 입력해주세요!');
    shake.restart();

    return;
  }
  clearContents(result);
  insertLast(result, pick);
}

function handleCopy() {
  const text = result.textContent;
  console.log(text);
  // promise 여서 then 사용가능
  copy(text).then(() => {
    showAlert('.alert-success', '클립보드복사완료');
  });
}

submit.addEventListener('click', handleSubmit);
result.addEventListener('click', handleCopy);
