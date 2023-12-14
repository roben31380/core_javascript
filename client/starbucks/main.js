const list = document.querySelectorAll('li');
const depth = document.querySelectorAll('.depth');
const nav = document.querySelector('nav');

list.forEach((li) => {
  li.addEventListener('mouseenter', (e) => {
    let currentDepth = e.target.lastElementChild;
    depth.forEach((li) => {
      li.style.height = 0;
    });
    currentDepth.style.height = '100px';
  });
});

nav.addEventListener('mouseleave', () => {
  depth.forEach((li) => {
    li.style.height = 0;
  });
});
