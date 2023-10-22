import initialLoad from './page-load';
import createHome from './home';
import createMenu from './menu';

const container = document.querySelector('#content');

initialLoad(container);

listenForTabSwitch();

function listenForTabSwitch() {
  const tabs = Array.from(document.querySelectorAll('.link'));
  console.log(container.children);

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      if (tab.textContent === 'Home') switchTab(createHome());
      if (tab.textContent === 'Menu') switchTab(createMenu());
      if (tab.textContent === 'Contact') alert('Contact');
    });
  });
}

export default function switchTab(tab) {
  const main = document.querySelector('main');
  main.remove();
  container.append(tab);
}

const showNav = document.querySelector('.show-nav');

function toggleNav() {
  const links = document.querySelector('.nav-links');
  if (links.style.display === 'none') {
    links.style.display = 'flex';
    showNav.innerHTML = '<i class="material-icons">close</i>';
  } else {
    links.style.display = 'none';
    showNav.innerHTML = '<i class="material-icons">menu</i>';
  }
}

showNav.addEventListener('click', toggleNav);
