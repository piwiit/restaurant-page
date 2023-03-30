const createLogo = () => {
  const logo = document.createElement("img");
  logo.src =
    "https://laboussole-larochelle.fr/wp-content/uploads/2021/07/logoPlan-de-travail-1.svg";
  return logo;
};

const createNavBar = () => {
  const navBar = document.createElement("nav");

  const homeButton = document.createElement("button");
  homeButton.classList.add("button-nav");
  homeButton.textContent = "Home";

  const menuButton = document.createElement("button");
  menuButton.classList.add("button-nav");
  menuButton.textContent = "Carte";

  const contactButton = document.createElement("button");
  contactButton.classList.add("button-nav");
  contactButton.textContent = "Contact";

  navBar.appendChild(homeButton);
  navBar.appendChild(menuButton);
  navBar.appendChild(contactButton);

  return navBar;
};

const createHeader = () => {
  const header = document.createElement("header");

  header.appendChild(createLogo());
  header.appendChild(createNavBar());
  return header;
};

export default createHeader;
