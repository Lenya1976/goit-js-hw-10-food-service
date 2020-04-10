import menu from '../menu.json';
import template from '../template/template.hbs';

const { LIGHT, DARK, NAME } = {
  NAME: 'theme',
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menuList: document.querySelector('.js-menu'),
  switchTheme: document.querySelector('.js-switch-input'),
  bodyClass: document.querySelector('body'),
};

const markup = template(menu);

refs.menuList.insertAdjacentHTML('beforeend', markup);

loadTheme(NAME);

const changeTheme = e => {
  const isOnTheme = refs.switchTheme.checked;
  currentTheme(isOnTheme);
  saveTheme(NAME, isOnTheme);
};

function darkTheme() {
  refs.bodyClass.classList.remove(LIGHT);
  refs.bodyClass.classList.add(DARK);
}

function lightTheme() {
  refs.bodyClass.classList.remove(DARK);
  refs.bodyClass.classList.add(LIGHT);
}

function currentTheme(isOnTheme) {
  if (isOnTheme) {
    darkTheme();
  } else {
    lightTheme();
  }
}
function saveTheme(NAME, isOnTheme) {
  localStorage.setItem(NAME, JSON.stringify(isOnTheme));
}
function loadTheme(NAME) {
  const isOnTheme = JSON.parse(localStorage.getItem(NAME));
  refs.switchTheme.checked = isOnTheme;
  currentTheme(isOnTheme);
}
refs.switchTheme.addEventListener('change', changeTheme);
