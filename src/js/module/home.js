const createHome = () => {
  const home = document.createElement('div');
  home.classList.add('home');

  const image = document.createElement('img');
  image.setAttribute('rel', 'preload');
  image.setAttribute('src', '../../picture/pizza.png');
  image.setAttribute('alt', 'chef pizzaiolo');

  home.appendChild(createParagraph('Les meilleurs Pizza de la région !'));
  home.appendChild(createParagraph('Fait avec amour depuis 1996.'));
  home.appendChild(image);
  home.appendChild(createParagraph('Commander en ligne ou directement sur place !'));

  return home;
};

const createParagraph = (text) => {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;

  return paragraph;
};

const loadHome = () => {
  const main = document.querySelector('.main');
  main.textContent = '';
  main.appendChild(createHome());
};

export default loadHome;
