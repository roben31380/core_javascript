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

(function () {
  const user = {
    id: 'asd@naver.com',
    pw: 'spdlqj123!@',
  };

  /*
  1. email 정규표현식을 사용한 validation
    - false면 해당 input에 is--invalid 클래스 추가     
    - true 해당 input에 is--invalid 클래스 제거     

  2. pw 정규표현식을 사용한 validation
    - false면 해당 input에 is--invalid 클래스 추가     
    - true 해당 input에 is--invalid 클래스 제거     

  3. 상태 변수 관리


  4. 로그인 버튼을 클릭시 조건처리

  */

  const emailInput = document.querySelector('#userEmail');
  const pwInput = document.querySelector('#userPassword');
  const loginButton = document.querySelector('.btn-login');

  let emailPass = false;
  let pwPass = false;

  function emailReg(text) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(text).toLowerCase());
  }

  function pwReg(text) {
    const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
    return re.test(String(text).toLowerCase());
  }

  function handleCheckEmail() {
    let value = this.value;

    if (emailReg(value)) {
      // success
      this.classList.remove('is--invalid');
      emailPass = true;
    } else {
      this.classList.add('is--invalid');
      emailPass = false;
    }
  }

  function handleCheckPw() {
    let value = this.value;

    if (pwReg(value)) {
      // success
      this.classList.remove('is--invalid');
      pwPass = true;
    } else {
      this.classList.add('is--invalid');
      pwPass = false;
    }
  }

  function handleLogin(e) {
    e.preventDefault();

    if (emailPass && pwPass) {
      const id = emailInput.value;
      const pw = pwInput.value;
      const getUserId = user.id; // 비동기 => 1s
      const getUserPw = user.pw; // 비동기 => 1s

      console.log(getUserId, getUserPw);

      if (id === getUserId && pw === getUserPw) {
        // console.log('로그인 성공!');

        window.location.href = './welcome.html';
      }
    } else {
      console.log('입력부터 똑바로 하고와! ');
      // alert('dlqfurEhrqkfhgo!')
      gsap.to('form', {
        y: 10,
        repeat: 8,
        yoyo: true,
        duration: 0.08,
        clearProps: true,
      });
    }
  }

  emailInput.addEventListener('input', handleCheckEmail);
  pwInput.addEventListener('input', handleCheckPw);
  loginButton.addEventListener('click', handleLogin);
})();
