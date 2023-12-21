import {
  changeColor,
  getNode,
  renderSpinner,
  renderUserCard,
  tiger,
  insertLast,
  delayP,
  renderEmptyCard,
} from './lib/index.js';
//* phase -1
//^ 1. user data fetch
const userCardInner = getNode('.user-card-inner');
const END_POINT = 'https://jsonplaceholder.typicode.com/users';

/* global gsap */
async function renderUserList() {
  renderSpinner(userCardInner);
  try {
    await delayP(100);
    getNode('.loading-spinner').remove();

    const response = await tiger.get(END_POINT);
    const userData = response.data;

    userData.forEach((data) => renderUserCard(userCardInner, data));
    changeColor('.user-card');

    gsap.from('.user-card', {
      x: 100,
      opacity: 0,
      stagger: 0.1,
    });
  } catch (err) {
    renderEmptyCard(userCardInner);
  }
}

function handleDelete(e) {
  const button = e.target.closest('button');
  const article = e.target.closest('article');

  if (!article || !button) return;
  const id = article.dataset.index.slice(5);
  tiger.delete(`${END_POINT}/${id}`);
}

renderUserList();

userCardInner.addEventListener('click', handleDelete);
