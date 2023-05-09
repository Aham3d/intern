const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#website');

const namePattern = /^[a-zA-Z]{3,}$/;
const emailPattern = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
const messagePattern = /^[a-zA-Z]{3,}$/;

function validateForm(event) {
  event.preventDefault();
  let isValid = true;
  if (isValid) {
    console.log('Form submitted successfully');
    console.log(nameInput.value);
    console.log(emailInput.value);
    console.log(messageInput.value);
    form.reset();
  } else {
    console.log('Form validation failed');
  }
}

form.addEventListener('submit', validateForm);
