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
    console.log();
    if (btn !== button) {
      btn.classList.remove('active');
    }
  });
  button.classList.add('active');
  console.log(button);
};

const createHeader = () => {
  const header = document.createElement('header');
  header.appendChild(createLogo());
  header.appendChild(createNavBar());
  return header;
};

const createMain = () => {
  const main = document.createElement('main');
  main.classList.add('main');
  return main;
};

const initializeWebsite = () => {
  const app = document.getElementById('app');

  app.appendChild(createHeader());
  app.appendChild(createMain());
  loadHome();
};

export default initializeWebsite;
