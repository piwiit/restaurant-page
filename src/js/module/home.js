const createHome = () => {
  const home = document.createElement('main');
  home.classList.add('home');

  home.textContent = 'home';

  return home;
};

const loadHome = () => {
  // const main = document.querySelector('main');
  // main.textContent = '';
  // main.appendChild(createHome());
  console.log('on home function');
};

export default loadHome;
