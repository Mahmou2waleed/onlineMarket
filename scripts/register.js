const scriptURL = 'https://script.google.com/macros/s/AKfycbzsfEluXcXxdBc2EI6Q7V_pqmtr4MygJAjDka-wtXKcPtz9L19mFzTwqvCTsc_U1Wnuag/exec';
let form = document.forms['submit-to-google-sheet'];

let loadImgCon = document.getElementsByClassName("loadImgCon")[0];
let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let passwordError = document.getElementById("password-error");
let confirmPasswordError = document.getElementById("confirm-password-error");

form = document.getElementsByClassName("form")[0];
let fullName = document.getElementsByClassName("fullName")[0];
let phone = document.getElementsByClassName("phone")[0];
let email = document.getElementsByClassName("email")[0];
let password = document.getElementsByClassName("password")[0];
let confirmPassword = document.getElementsByClassName("confirmPassword")[0];
let submitError = document.getElementById("submitError");

fullName.onkeyup = function () {
  let name = fullName.value;
  let validName = /^[\p{L}]+\s+[\p{L}]+$/u;

  if (name === "") {
    nameError.innerText = "Enter your name";
  } else if (!validName.test(name)) {
    nameError.innerText = "Enter your correct full name";
  } else {
    nameError.innerText = "";
  }
};

phone.onkeyup = function () {
  let phoneNumber = phone.value;
  let validPhone = /^\d{11}$/;

  if (phoneNumber === "") {
    phoneError.innerText = "Enter your phone number";
  } else if (!validPhone.test(phoneNumber)) {
    phoneError.innerText = "Enter your correct phone number";
  } else {
    phoneError.innerText = "";
  }
};

email.onkeyup = function () {
  let emailVal = email.value;
  let validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailVal === "") {
    emailError.innerText = "Enter your email";
  } else if (!validEmail.test(emailVal)) {
    emailError.innerText = "Enter your correct email";
  } else {
    emailError.innerText = "";
  }
};

password.onkeyup = function () {
  let passwordVal = password.value;

  const minLength = 8;
  const maxLength = 128; 
  const hasUppercase = /[A-Z]/.test(passwordVal); 
  const hasLowercase = /[a-z]/.test(passwordVal); 
  const hasNumber = /[0-9]/.test(passwordVal);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwordVal);

  if (passwordVal === "") {
    passwordError.innerText = "Enter your password";
  } else if (
    passwordVal.length >= minLength &&
    passwordVal.length <= maxLength &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecialChar
  ) {
    passwordError.innerText = "";
  } else {
    passwordError.innerText = "Enter a strong password";
  }
};

confirmPassword.onkeyup = function () {
  let confirmPasswordVal = confirmPassword.value;

  if (confirmPasswordVal === "") {
    confirmPasswordError.innerText = "Confirm your password";
  } else if (confirmPasswordVal === password.value) {
    confirmPasswordError.innerText = "";
  } else {
    confirmPasswordError.innerText = "Passwords do not match";
  }
};

form.addEventListener('submit', e => {
  e.preventDefault();
  let isValid = true;

  if (nameError.innerText || fullName.value === "") {
    nameError.innerText = "Enter your name";
    isValid = false;
  }

  if (phoneError.innerText || phone.value === "") {
    phoneError.innerText = "Enter your phone number";
    isValid = false;
  }

  if (emailError.innerText || email.value === "") {
    emailError.innerText = "Enter your email";
    isValid = false;
  }

  if (passwordError.innerText || password.value === "") {
    passwordError.innerText = "Enter your password";
    isValid = false;
  }

  if (confirmPasswordError.innerText || confirmPassword.value === "") {
    confirmPasswordError.innerText = "Confirm your password";
    isValid = false;
  }

  if (!isValid) return;

  form.style.display = "none";
  loadImgCon.style.display = "flex"; 
  let formData = new FormData(form);
  formData.set('phone', "'" + phone.value);

  function er_ror() {
    submitError.innerHTML = `
      <img class="imgst" src="https://www.svgrepo.com/show/157825/error.svg" />
      <h1 class="text">An error has occurred Try it again!</h1>
      <button class="finBtn" id="resetBtn">Reset</button>`;
    submitError.style.display = "flex";
    loadImgCon.style.display = "none";
  }
  

  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => {
      loadImgCon.style.display = "none";
      submitError.innerHTML = `
      <img class="imgst" src="https://cdn-icons-png.flaticon.com/512/4315/4315445.png" />
      <h1 class="text">You're done, let's start now.</h1>
      <button class="finBtn" id="signinBtn" onclick="window.location.href= 'sign-in.html'">Sign In</button>`;
      submitError.style.display = "flex";
      form.reset();
    })
    .catch(er_ror);
});

function resetForm() {
  submitError.style.display = "none";
  form.reset();

  nameError.innerText = "";
  phoneError.innerText = "";
  emailError.innerText = "";
  passwordError.innerText = "";
  confirmPasswordError.innerText = "";

  loadImgCon.style.display = "none";  
  form.style.display = "flex";
}

document.addEventListener('click', function (event) {
  if (event.target.matches('#resetBtn')) {
    resetForm();
  }
});

//--------------------Sign In-------------------------

