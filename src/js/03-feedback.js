import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));

form.addEventListener('submit', onFormSubmit);

populateTextareaInput();

function onFormInput() {
  const formData = {
    mail: `${input.value}`,
    message: `${textarea.value}`,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextareaInput() {
  const parsedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (parsedFormData) {
    input.value = parsedFormData.mail;
    textarea.value = parsedFormData.message;
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  const submitFormData = {
    email: email.value,
    message: message.value,
  };
  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }
  console.log(submitFormData);
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}
