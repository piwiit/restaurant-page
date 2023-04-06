const createNavBar = () => {
  const navBar = document.createElement('navBar');

  const homeButton = document.createElement('button');
  homeButton.classList.add('button-navBar');
  homeButton.textContent = 'home';

  const menuButton = document.createElement('button');
  menuButton.classList.add('button-navBar');
  menuButton.textContent = 'La carte';

  const contactButton = document.createElement('button');
  contactButton.classList.add('button-navBar');
  contactButton.textContent = 'contact';

  navBar.appendChild(homeButton);
  navBar.appendChild(menuButton);
  navBar.appendChild(contactButton);

  return navBar;
};

const createHeader = () => {
  const header = document.createElement('header');

  header.appendChild(createNavBar());
  console.log('essais');
};

export default createHeader;
