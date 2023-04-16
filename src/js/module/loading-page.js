const createLogo = () => {
  const logo = document.createElement('div');
  logo.classList.add('logo');
  return logo;
};

const createNavBar = () => {
  const arr = ['home', 'menu', 'contact'];
  const navBar = document.createElement('nav');

  const ul = document.createElement('ul');
  arr.forEach((element) => {
    const li = document.createElement('li');
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
