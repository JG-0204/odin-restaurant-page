export default function createMenu() {
  const main = document.createElement('main');
  main.classList.add('menu-main');

  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.append(
    createDishHeading('Main Dishes'),
    createMainDish(),
    createDishHeading('Desserts'),
    createDesserts(),
    createDishHeading('Drinks'),
    createDrinks(),
  );

  main.appendChild(menu);
  return main;
}

function createDishHeading(type) {
  const heading = document.createElement('h2');
  heading.classList.add('dish-type');
  heading.textContent = type;

  return heading;
}

function createMainDish() {
  const mainDish = document.createElement('div');
  mainDish.classList.add('main-dish', 'dishes');

  const img = document.createElement('img');
  img.src = '/images/dish.png';

  const container = document.createElement('div');

  container.append(
    createDish(
      'Yakitori',
      '$1.00',
      'small skewers of bite-size chicken pieces seasoned with salt or brushed with a sauce',
    ),
    createDish(
      'Tempura',
      '$1.00',
      'pieces or slices of meat, fish, and/or vegetables, covered in a special tempura batter and deep fried until crunchy and pale gold',
    ),
    createDish(
      'Sashimi',
      '$1.00',
      ' raw fish or meat that has been expertly cut into thin slices and typically comes served with daikon radish, pickled ginger, wasabi and soy sauce',
    ),
    createDish(
      'Tonkatsu',
      '$1.00',
      'crisp panko breadcrumbs coated pork chops, deep-fried  until golden brown',
    ),
  );

  mainDish.append(img, container);

  return mainDish;
}

function createDesserts() {
  const desserts = document.createElement('div');
  desserts.classList.add('desserts', 'dishes');

  const img = document.createElement('img');
  img.src = '/images/dessert.png';

  const container = document.createElement('div');

  container.append(
    createDish(
      'Kashi Pan',
      '$1.00',
      'buns stuffed with jam, or a soft filling of chocolate cream ',
    ),
    createDish(
      'Wagashi',
      '$1.00',
      ' traditional Japanese confections, made from various types of rice or wheat flour, sugar, nuts, beans and starches',
    ),
    createDish(
      'Dorayaki',
      '$1.00',
      'honey pancakes filled with sweet red bean paste ',
    ),
  );

  desserts.append(container, img);

  return desserts;
}

function createDrinks() {
  const drinks = document.createElement('div');
  drinks.classList.add('drinks', 'dishes');

  const img = document.createElement('img');
  img.src = '/images/drinks.png';

  const container = document.createElement('div');

  container.append(
    createDish(
      'Ramune',
      '$1.00',
      'carbonated soda that comes in a variety of different flavors, served in its distinctly-shaped glass bottle for a refreshing summer treat. ',
    ),
    createDish(
      'Japanese Sake',
      '$1.00',
      'rice wine that is made from rice, rice koji, and water. ',
    ),
    createDish('Japanese Whisky', '$1.00', 'japanese version of whisky '),
  );

  drinks.append(img, container);

  return drinks;
}

function createDish(name, price, description) {
  const dish = document.createElement('div');
  dish.classList.add('dish');

  const container = document.createElement('div');

  const dishName = document.createElement('h3');
  dishName.classList.add('dish-name');
  dishName.textContent = name;

  const dishPrice = document.createElement('p');
  dishPrice.classList.add('dish-price');
  dishPrice.textContent = price;

  container.append(dishName, dishPrice);

  const dishDetails = document.createElement('p');
  dishDetails.classList.add('dish-description');
  dishDetails.textContent = description;

  dish.append(container, dishDetails);

  return dish;
}
