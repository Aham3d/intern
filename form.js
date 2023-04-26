const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const phoneInput = document.querySelector('#phone');
const emailInput = document.querySelector('#email');
const websiteInput = document.querySelector('#website');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

const namePattern = /^[a-zA-Z]{3,}$/;
const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
const emailPattern = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
const websitePattern = /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?$/;
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

function validateField(input, pattern) {
  if (input.value.trim() === '') {
    input.classList.add('invalid');
    input.classList.remove('valid');
    return false;
  } else if (!pattern.test(input.value)) {
    input.classList.add('invalid');
    input.classList.remove('valid');
    return false;
  } else {
    input.classList.add('valid');
    input.classList.remove('invalid');
    return true;
  }
}

function passwordsMatch() {
  if (passwordInput.value === confirmPasswordInput.value) {
    confirmPasswordInput.classList.add('valid');
    confirmPasswordInput.classList.remove('invalid');
    return true;
  } else {
    confirmPasswordInput.classList.add('invalid');
    confirmPasswordInput.classList.remove('valid');
    return false;
  }
}

function validateForm(event) {
  event.preventDefault();
  let isValid = true;
  if (!validateField(nameInput, namePattern)) {
    isValid = false;
  }
  if (!validateField(phoneInput, phonePattern)) {
    isValid = false;
  }
  if (!validateField(emailInput, emailPattern)) {
    isValid = false;
  }
  if (!validateField(websiteInput, websitePattern)) {
    isValid = false;
  }
  if (!validateField(passwordInput, passwordPattern)) {
    isValid = false;
  }
  if (!passwordsMatch()) {
    isValid = false;
  }
  if (isValid) {
    console.log('Form submitted successfully');
    console.log(`Name: ${nameInput.value}`);
    console.log(`Phone: ${phoneInput.value}`);
    console.log(`Email: ${emailInput.value}`);
    console.log(`Website: ${websiteInput.value}`);
    form.reset();
    nameInput.classList.remove('valid', 'invalid');
    phoneInput.classList.remove('valid', 'invalid');
    emailInput.classList.remove('valid', 'invalid');
    websiteInput.classList.remove('valid', 'invalid');
    passwordInput.classList.remove('valid', 'invalid');
    confirmPasswordInput.classList.remove('valid', 'invalid');
  } else {
    console.log('Form validation failed');
  }
}

form.addEventListener('submit', validateForm);
