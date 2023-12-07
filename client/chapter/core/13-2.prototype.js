/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

class Animal {
  constructor() {
    // for (let [key, value] of Object.entries(options)) {
    //   this[key] = value;
    // }
    // this.name = name;
    // this.stomach = [];
    // this.legs = 4;
    // this.tail = true
  }

  get eat() {
    return this.stomach;
  }

  set eat(value) {
    this.prey = value;
    this.stomach.push(value);
  }
}

const animal = new Animal({ name: '포동이', age: 15 });

class Tiger extends Animal {
  constructor(name) {
    super(name); //* 상위 constructor를 불러올때 extends와 같이 사용
    this.pattern = '호랑이무늬';
  }
  hunt(target) {
    this.prey = target;
    return `${target}냠냠`;
  }
  static bark() {
    return '어흥🦁!';
  }

  static options = {
    version: '1.1',
    com: true,
  };
}

const 한라산호랑이 = new Tiger('포동이');

class Array {
  constructor() {}

  static isArray() {}

  forEach() {}

  reduce() {}

  map() {}
}
