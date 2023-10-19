export default function createHome() {
  const main = document.createElement('main');

  const home = document.createElement('div');
  home.classList.add('home');

  const restoDescription = document.createElement('p');
  restoDescription.classList.add('description');
  restoDescription.textContent =
    'Baryo-Fiesta offers an authentic Filipino dining experience.';

  const menuButton = document.createElement('button');
  menuButton.textContent = 'See Menu';
  menuButton.classList.add('btn-menu');

  home.append(restoDescription, menuButton);

  main.appendChild(home);

  return main;
}
