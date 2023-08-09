import loadHome from './home';
import loadMenu from './menu';

const createLogo = () => {
  const logo = document.createElement('img');
  logo.classList.add('logo');
  logo.setAttribute('rel', 'preload');
  logo.setAttribute('src', '../../picture/logo.png');
  logo.setAttribute('alt', 'logo du restaurant madera sur un fond blanc');
  return logo;
};

const createNavBar = () => {
  const arr = ['Home', 'Menu', 'Contact'];
  const navBar = document.createElement('nav');
  const ul = document.createElement('ul');

  ul.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName === 'LI') {
      switch (target.textContent) {
        case 'Home':
          loadHome();
          break;
        case 'Menu':
          loadMenu();
          break;
        // Add more cases for other buttons if needed
      }
    }
  });

  arr.forEach((element) => {
    const li = document.createElement('li');
    li.classList.add(`nav-button-${arr.indexOf(element)}`);
    li.textContent = element;
    ul.appendChild(li);
  });

  navBar.appendChild(ul);
  return navBar;
};

const setActiveButton = (button) => {
  const buttons = document.querySelectorAll('.nav-button');
  buttons.forEach((btn) => {
    if (btn !== button) {
      btn.classList.remove('active');
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
