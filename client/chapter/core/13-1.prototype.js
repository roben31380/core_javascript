/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// *  프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  get eat() {
    return this.stomach;
  },
  set eat(food) {
    this.stomach.push(food);
    this.prey = food;
  },
};

const tiger = {
  pattern: '호랑이무늬',
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  },
  __proto__: animal,
};
// tiger.__proto__ = animal

const 백호 = {
  color: 'white',
  nickName: '포동',
  __proto__: tiger,
};

//*  생성자 함수
//& 일반함수 vs. 생성자함수 : 호출할때 다름!
function button() {}

function Button2() {}

button(); //!일반힘수
new Button2(); //!생성자함수

function Animal() {
  this.leg = 4;
  this.setEat = function () {};
  this.getEat = function () {};
}

const newAnimal = new Animal(); //! 객체를 생성시켜서 newAnimal에 할당함

function Tiger(name) {
  Animal.call(this);
  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt = function (target) {
    this.prey = target;
    return `${target}에게 조용히 다가간다.`;
  };
}

Tiger.bark = function () {
  return '어흥!';
};

const 한라산호랑이 = new Tiger('포동이');
const 금강산호랑이 = new Tiger();

//^ static으로 Tiger에게 method 부여
Tiger.bark = function () {
  return '어흥';
};

const 벵갈 = new Tiger();

//^ call this와 arg를 전달, 바로 실행
//apply
//bind

function sum(a, b, c) {
  console.log(this);
}

sum.call('안녕', 1, 2, 3); // 바로 실행
// apply
// bind

//* class로 가기 위한 길
