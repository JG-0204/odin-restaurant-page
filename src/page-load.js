import createHome from './home';

export default function initialLoad(container) {
  container.append(createHeader(), createHome(), createFooter());
}

function createHeader() {
  const header = document.createElement('header');

  const logo = document.createElement('h1');
  logo.textContent = 'Baryo-Fiesta';
  logo.classList.add('logo');

  const showMenuButton = document.createElement('button');
  showMenuButton.classList.add('show-nav');
  showMenuButton.innerHTML = '<i class="material-icons">menu</i>';

  header.append(logo, createNav(), showMenuButton);
  return header;
}

function createNav() {
  const nav = document.createElement('nav');
  nav.classList.add('navbar');

  const navLinks = document.createElement('ul');
  navLinks.classList.add('nav-links');

  for (let i = 0; i < 3; i++) {
    const link = document.createElement('button');
    link.classList.add('link');

    navLinks.appendChild(link);
  }

  const links = Array.from(navLinks.children);
  links[0].textContent = 'Home';
  links[1].textContent = 'Menu';
  links[2].textContent = 'Contact';

  nav.appendChild(navLinks);

  return nav;
}

function createFooter() {
  const footer = document.createElement('footer');

  const p = document.createElement('p');
  p.textContent = 'Photo by Danis Lou on Unsplash';

  footer.appendChild(p);

  return footer;
}
