/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const section = document.body.querySelector('section');
const article = document.body.querySelector('article');
const p = document.body.querySelector('p');

section.addEventListener('click', (e) => {
  console.log(e.target);
  console.log(e.currentTargettarget);
  console.log('section!');
});

// article.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('article!');
// });

// p.addEventListener('click', () => {
//   console.log('p!');
// });
/* 캡처링 ----------------------------------------------------------------- */
