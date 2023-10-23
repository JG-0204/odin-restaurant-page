import switchTab from './index';
import createMenu from './menu';

export default function createHome() {
  const main = document.createElement('main');

  const home = document.createElement('div');
  home.classList.add('home');

  const restoDescription = document.createElement('p');
  restoDescription.classList.add('description');
  restoDescription.textContent =
    'Baryo-Fiesta offers an authentic Filipino dining experience.';

  home.append(restoDescription, createMenuButton('See Menu', 'btn-menu'));

  main.appendChild(home);

  return main;
}

function createMenuButton(btnText, btnClass) {
  const button = document.createElement('button');
  button.classList.add(btnClass);
  button.textContent = btnText;
  button.addEventListener('click', () => {
    switchTab(createMenu());
  });

  return button;
}
