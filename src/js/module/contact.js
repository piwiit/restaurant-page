const createContact = () => {
  // Créer le conteneur principal
  const contact = document.createElement('div');
  contact.classList.add('contact');

  // Créer les éléments pour les informations de téléphone
  const phone = createContactInfo('phone', 'fa-phone', 'Appelez nous:', '+33 07-98-16-89-24');

  // Créer les éléments pour les informations d'email
  const mail = createContactInfo('mail', 'fa-envelope', null, 'maderapizza@email.com');

  // Créer les éléments pour les informations d'adresse
  const map = createContactInfo(
    'map',
    'fa-location-dot',
    null,
    "17 avenue de l'Amandier,  33000 Bordeaux"
  );

  // Ajouter les éléments au conteneur principal
  contact.appendChild(phone);
  contact.appendChild(mail);
  contact.appendChild(map);

  return contact;
};

const createContactInfo = (type, iconClass, label, content) => {
  const infoContainer = document.createElement('div');
  infoContainer.classList.add(type);

  const icon = document.createElement('i');
  icon.classList.add('fa-solid', iconClass);

  const infoContent = document.createElement('p');
  if (label) {
    const infoLabel = document.createElement('p');
    infoLabel.textContent = label;
    infoContainer.appendChild(infoLabel);
  }
  infoContent.textContent = content;

  infoContainer.appendChild(icon);
  infoContainer.appendChild(infoContent);

  return infoContainer;
};

const loadContact = () => {
  const main = document.querySelector('.main');
  main.textContent = '';
  main.appendChild(createContact());
};

export default loadContact;
