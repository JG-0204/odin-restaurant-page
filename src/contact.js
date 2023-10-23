export default function createContact() {
  const main = document.createElement('main');
  main.classList.add('contact-main');

  const heading = document.createElement('h2');
  heading.classList.add('contact-heading');
  heading.textContent = 'Message Us!';

  const contact = document.createElement('div');
  contact.classList.add('contact');

  contact.append(createForm(), createLocation());

  main.append(heading, contact);
  return main;
}

function createLocation() {
  const container = document.createElement('div');
  container.classList.add('location-container');

  container.innerHTML =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.700801439153!2d120.47185197633475!3d14.84204098567343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339669182b91e621%3A0x76d33f89a3b0f770!2sJollibee!5e0!3m2!1sen!2sph!4v1698042545958!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

  container.append(
    createParagraph('(+63)9987-654-321', 'resto-number'),
    createParagraph('We are always open!', 'resto-hours'),
  );
  return container;
}

function createParagraph(paraText, paraClass) {
  const para = document.createElement('p');
  para.classList.add(paraClass);
  para.textContent = paraText;

  return para;
}

function createForm() {
  const form = document.createElement('form');

  const name = createInput('Name', 'text', 'user-name', false);
  const email = createInput('Email', 'email', 'user-email', true);
  const textArea = createTextArea('Message Us', 15, 50, 'message-area');
  const submitButton = createSubmitButton('Submit', 'btn-submit');

  form.append(name, email, textArea, submitButton);
  return form;
}

function createSubmitButton(text, btnClass) {
  const button = document.createElement('button');
  button.classList.add(btnClass);
  button.textContent = text;

  button.addEventListener('click', (event) => {
    if (form.validity()) {
      event.preventDefault();
    }
  });

  return button;
}

function createInput(labelText, inputType, inputID, isRequired) {
  const label = document.createElement('label');
  label.setAttribute('for', inputID);
  label.textContent = labelText;

  const input = document.createElement('input');
  input.id = inputID;
  input.type = inputType;
  if (isRequired) input.setAttribute('required', '');

  label.appendChild(input);

  return label;
}

function createTextArea(labelText, rows, column, id) {
  const label = document.createElement('label');
  label.textContent = labelText;
  label.setAttribute('for', id);

  const textArea = document.createElement('textarea');
  textArea.id = id;
  textArea.rows = rows;
  textArea.cols = column;

  label.appendChild(textArea);
  return label;
}
