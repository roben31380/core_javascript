import {
  changeColor,
  getNode as $,
  renderSpinner,
  renderUserCard,
  tiger,
  insertLast,
  delayP,
  renderEmptyCard,
  clearContents,
} from './lib/index.js';

//* phase -1
//^ 1. user data fetch

const userCardInner = $('.user-card-inner');
const END_POINT = 'http://localhost:3000/users';
const createBtn = $('.create');
const createButton = $('.create');
const cancelButton = $('.cancel');
const doneButton = $('.done');

/* global gsap */
async function renderUserList() {
  renderSpinner(userCardInner);
  try {
    await delayP(100);
    $('.loading-spinner').remove();

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

  tiger.delete(`${END_POINT}/${id}`).then(() => {
    clearContents(userCardInner);
    renderUserList();
  });
}

renderUserList();

function handleCreate() {
  gsap.to('.pop', { autoAlpha: 1 });
}

function handleCancel(e) {
  e.stopPropagation();
  gsap.to('.pop', { autoAlpha: 0 });
}

function handleDone(e) {
  e.preventDefault();

  const name = $('#nameField').value;
  const email = $('#emailField').value;
  const website = $('#siteField').value;

  const obj = {
    name,
    email,
    website,
  };

  tiger.post(END_POINT, obj).then(() => {
    clearContents(userCardInner);
    renderUserList();
    gsap.to('.pop', { autoAlpha: 0 });
  });
}

createButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);
doneButton.addEventListener('click', handleDone);
