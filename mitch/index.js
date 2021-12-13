// console.log('Hello World');
// let x = document.forms["form"]["firstName", "lastName", "email"].value;
// if (x == ''){
//     alert("Every box must be filled out");
// }
const form = document.querySelector("form[name='contact-form']");
const fnameInput = document.querySelector("input[name='fname']");
const lnameInput = document.querySelector("input[name='lname']");
const emailInput = document.querySelector("input[name='email']");
const messageInput = document.querySelector("textarea[name='message']");

fnameInput.isValid = () => !!fnameInput.value;
lnameInput.isValid = () => !!lnameInput.value;
emailInput.isValid = () => isValidEmail(emailInput.value);
messageInput.isValid = () => !!messageInput.value;

const inputFields = [fnameInput, lnameInput, emailInput, messageInput];

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

let shouldValidate = false;
let isFormValid = false;

const validateInputs = () => {
  console.log("we are here");
  if (!shouldValidate) return;

  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid");
    input.nextElementSibling.classList.add("hide");

    if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
      input.nextElementSibling.classList.remove("hide");
    }
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  shouldValidate = true;
  validateInputs();
  if (isFormValid) {
    // TODO: DO AJAX REQUEST
  }
});

inputFields.forEach((input) => input.addEventListener("input", validateInputs));