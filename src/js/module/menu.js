const createMenu = () => {
  const menu = document.createElement('main');
  menu.classList.add('menu');

  menu.textContent = 'menu';

  return menu;
};

const loadMenu = () => {
  // const main = document.querySelector('main');
  // main.textContent = '';
  // main.appendChild(createMenu());
  console.log('on menu function');
};

export default loadMenu;
