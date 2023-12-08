function earth() {
  let water = true;

  let apple = {
    founder: 'Steve Jobs',
    ceo: 'Tim Cook',
    product: ['iphone', 'macbook', 'macStudio', 'appleWatch'],
  };

  let gravity = 10;

  // function tiger(value) {
  //   gravity = value;
  // }
  // return tiger;

  return function (value) {
    gravity = value;
  };
}

const ufo = earth();

ufo(1);

function handleClick() {
  let isClicked = false;

  return () => {
    if (!isClicked) {
      const newClr = generateRandomClr();
      document.body.style.background = `rgb(${newClr.r},${newClr.g},${newClr.b} )`;
    } else {
      document.body.style.background = 'white';
    }

    isClicked = !isClicked;
  };
}
document.querySelector('button').addEventListener('click', handleClick());

function generateRandomClr() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return { r, g, b };
}

/* const button = document.querySelector('.button');

const handleClick = (() => {
  let isClicked = false;

  return function () {
    if (!isClicked) {
      const newClr = generateRandomClr();
      document.body.style.background = `rgb(${newClr[0]},${newClr[1]},${newClr[2]} )`;
    } else {
      document.body.style.background = 'white';
    }

    isClicked = !isClicked;
  };
})(); */

/* function bindEvent(node, type, handler) {
  node.addEventListener(type, handler);
  return () => node.removeEventListener(type, handler);
}

const remove = bindEvent(button, 'click', handleClick); */

//* 리액트의 usestate

function useState(initValue) {
  let value = initValue;

  function read() {
    return value;
  }

  function write(newValue) {
    value = newValue;
  }

  return [read, write];
}

const [state, setState] = useState(true);

// 예제
