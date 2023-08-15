import loadHome from './home';
import loadMenu from './menu';

const ELEMENTS = ['Home', 'Menu', 'Contact'];

function createLogo() {
  const logo = document.createElement('img');
  logo.classList.add('logo');
  logo.src = '../../picture/logo.png';
  logo.alt = 'logo du restaurant madera sur un fond blanc';
  return logo;
}

function setActiveButton(button) {
  //stock active class if we need to change class name
  const activeClass = 'active';
  document.querySelectorAll('li').forEach((btn) => btn.classList.remove(activeClass));
  button.classList.add(activeClass);
}

function createNavBar() {
  const navBar = document.createElement('nav');
  const ul = document.createElement('ul');

  ul.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName === 'LI') {
      switch (target.textContent) {
        case 'Home':
          loadHome();
          setActiveButton(target);
          break;
        case 'Menu':
          loadMenu();
          setActiveButton(target);
          break;
        // Add more cases for other buttons if needed
      }
    }
  });

  ELEMENTS.forEach((element, index) => {
    const li = document.createElement('li');
    li.classList.add(`nav-button-${index}`);
    li.textContent = element;
    ul.appendChild(li);
  });

  navBar.appendChild(ul);
  return navBar;
}

function createHeader() {
  const header = document.createElement('header');
  header.appendChild(createLogo());
  header.appendChild(createNavBar());
  return header;
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  return main;
}

function initializeWebsite() {
  const app = document.getElementById('app');
  app.appendChild(createHeader());
  app.appendChild(createMain());
  setActiveButton(document.querySelector('.nav-button-0'));
  loadHome();
}

export default initializeWebsite;
