const createContact = () => {
  const contact = document.createElement('main');
  contact.classList.add('contact');

  contact.textContent = 'contact';

  return contact;
};

const loadcontact = () => {
  const main = document.querySelector('.main');
  main.textContent = '';
  main.appendChild(createContact());
};

export default loadcontact;
