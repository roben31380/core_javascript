const data = [
  {
    id: 1,
    src: 'visual1.jpg',
    alt: '모던한 테이블과 화분의 조화를 표현한 공간',
  },
  {
    id: 2,
    src: 'visual2.jpg',
    alt: '강렬한 의자의 색상과 따뜻한 느낌의 공간',
  },
  {
    id: 3,
    src: 'visual3.jpg',
    alt: '호텔 라운지 느낌의 편안한 의자가 있는 공간',
  },
  {
    id: 4,
    src: 'visual4.jpg',
    alt: '물방을 모양의 독특한 디자인의 의자들을 나열한 공간',
  },
];

const navigation = document.body.querySelector('.navigation');
const visualImage = document.body.querySelector('.visual img');

function handleClick(e) {
  e.preventDefault();
  const li = e.target.closest('li');
  if (!li) return;
  // const list = [...navigation.children];
  const list = Array.from(navigation.children);
  list.forEach((li) => li.classList.remove('is-active'));
  li.classList.add('is-active');

  const a = e.target.closest('a');

  visualImage.src = `./assets/part01/${data[li.dataset.index - 1].src}`;
  visualImage.alt = `data[li.dataset.index-1].alt`;

  gsap.from(split.chars, {
    opacity: 0,
    y: 10,
    stagger: 0.05,
    ease: 'front(1)',
    immediateRender: false,
  });
}

navigation.addEventListener('click', handleClick);
// navigation.removeEventListener('!click', handleClick);

const split = new SplitText('h3', { type: 'chars' });
