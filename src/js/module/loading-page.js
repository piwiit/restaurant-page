import loadHome from './home';
import loadMenu from './menu';

const createLogo = () => {
  const logo = document.createElement('img');
  logo.classList.add('logo');

  const setAttributes = (el, options) => {
    Object.keys(options).forEach(function (attr) {
      el.setAttribute(attr, options[attr]);
    });
  };

  setAttributes(logo, {
    rel: 'preload',
    src: '../../picture/logo.png',
    alt: 'logo du restaurant madera sur un fond blanc',
  });

  return logo;
};

const createNavBar = () => {
  const arr = ['Home', 'Menu', 'Contact'];
  const navBar = document.createElement('nav');

  const ul = document.createElement('ul');
  arr.forEach((element) => {
    const li = document.createElement('li');
    li.classList.add(`nav-button-${arr.findIndex((content) => content === element)}`);
    li.textContent = element;

    ul.appendChild(li);
  });

  ul.childNodes.forEach((element) => {
    element.addEventListener('click', () => {
      if (element.textContent === 'home') {
        return loadHome();
      } else if (element.textContent === 'menu') {
        return loadMenu();
      } else {
        return;
      }
    });
  });

  navBar.appendChild(ul);
  return navBar;
};

const setActiveButton = (button) => {
  const buttons = document.querySelectorAll('.nav-button');
  buttons.forEach((button) => {
    if (button != this) {
      button.classList.remove('active');
    }
  });
  button.classList.add('active');
};

const createHeader = () => {
  const header = document.createElement('header');

  header.appendChild(createLogo());
  header.appendChild(createNavBar());

  return header;
};

const initializeWebsite = () => {
  const app = document.getElementById('app');

  app.appendChild(createHeader());
};

export default initializeWebsite;
