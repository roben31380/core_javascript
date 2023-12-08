//* querySelector
const button = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const input = document.querySelector('.input');

//* eventlistner
// event 사용자가 하는 행동?
//^ EVENT: click, input
// Node.addevent..
// html이 우선,
//TODO event에 들어가는 함수는 handle 붙여주기

function handleMenu(e) {
  e.preventDefault();
  menu.classList.toggle('is-active'); // 메뉴의 클래스리스트에 해당 클래스명을 추가한다.
  // .add, .remove 각각의 행동을 다르게 주고싶을때
  /*   if(!isOpend){
    menu.classList.add('is-active')  
  }else{
    menu.classList.remove('is-active')  
  }

  isOpend = !isOpend;
 */
}

button.addEventListener('click', handleMenu);

input.addEventListener('input', handleInput);
function handleInput() {
  console.log();

  if (this.value === 'hello') {
    console.log('success');
  }
}
//* classList

//* preventDefault
//
