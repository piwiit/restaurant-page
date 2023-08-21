const createMenu = () => {
  const containt = document.createElement('div');
  containt.classList.add('menu');

  const menu = [
    {
      name: 'Salsiccia',
      ingredients: 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil',
      picture: '../../picture/salsiccia.png',
    },
    {
      name: 'Gamberi',
      ingredients: 'Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil',
      picture: '../../picture/gamberi.png',
    },
    {
      name: 'Pepe',
      ingredients: 'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil',
      picture: '../../picture/pepe.png',
    },
    {
      name: 'Disgustoso',
      ingredients: 'Tomato sauce, Bacon, Pineapple, Olives, Basil',
      picture: '../../picture/disgustoso.png',
    },
    {
      name: 'Colorato',
      ingredients: 'Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil',
      picture: '../../picture/colorato.png',
    },
    {
      name: 'Pomodoro',
      ingredients: 'Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli',
      picture: '../../picture/pomodoro.png',
    },
    {
      name: 'Crema',
      ingredients: 'White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil',
      picture: '../../picture/crema.png',
    },
    {
      name: 'Carne',
      ingredients: 'Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli',
      picture: '../../picture/carne.png',
    },
  ];

  containt.innerHTML = menu
    .map(
      (pizza) => `
  <div class='card'>
      <img src="${pizza.picture}" alt="${pizza.name}">
      <h4>${pizza.name}</h4>
      <p>${pizza.ingredients}</p>
  </div>
`
    )
    .join('');
  return containt;
};

const loadMenu = () => {
  const main = document.querySelector('.main');
  main.textContent = '';
  main.appendChild(createMenu());
};

export default loadMenu;
