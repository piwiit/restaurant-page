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
  const arr = ['home', 'menu', 'contact'];
  const navBar = document.createElement('nav');

  const ul = document.createElement('ul');
  arr.forEach((element) => {
    const li = document.createElement('li');
    li.classList.add(`nav-button-${arr.findIndex((content) => content === element)}`);
    li.textContent = element;
    ul.appendChild(li);
  });

  navBar.appendChild(ul);
  return navBar;
};

const createHeader = () => {
  const header = document.createElement('header');

  header.appendChild(createLogo());
  header.appendChild(createNavBar());

  return header;
};

export default createHeader;
