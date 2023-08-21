const createContact = () => {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const phone = document.createElement('div');
  phone.innerHTML = `<i class="fa-solid fa-phone"></i>`;
  const phoneContact = document.createElement('p');
  const phonenumber = document.createElement('p');

  phoneContact.textContent = 'Appelez nous:';
  phonenumber.textContent = '+33 07-98-16-89-24';

  const mail = document.createElement('div');
  mail.innerHTML = `<i class="fa-solid fa-envelope"></i>`;
  const email = document.createElement('p');

  email.textContent = 'maderapizza@email.com';

  const map = document.createElement('div');
  map.innerHTML = `<i class="fa-solid fa-location-dot"></i>`;
  const street = document.createElement('p');
  street.textContent = " 17 avenue de l'Amandier,  33000 Bordeaux";

  contact.appendChild(phone);
  contact.appendChild(mail);
  contact.appendChild(map);

  phone.appendChild(phoneContact);
  phone.appendChild(phonenumber);

  mail.appendChild(email);

  map.appendChild(street);

  return contact;
};

const loadcontact = () => {
  const main = document.querySelector('.main');
  main.textContent = '';
  main.appendChild(createContact());
};

export default loadcontact;
