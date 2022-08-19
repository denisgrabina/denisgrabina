const mainWrapper = document.getElementById("mainWrapper");
const formBlock = document.getElementById("formBlock");
const close = document.getElementById("close");
const form = document.getElementById("contactForm");
const userName = document.getElementById("username");
const email = document.getElementById("email");

// Form block toggle

const formBlockOpen = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  formBlock.classList.remove("hide");
  formBlock.classList.add("show");
};

const formBlockClose = () => {
  formBlock.classList.remove("show");
  formBlock.classList.add("hide");
};

mainWrapper.addEventListener("click", (e) => {
  if (e.target.id === "contactUs") {
    formBlockOpen();
  }
});

close.addEventListener("click", formBlockClose);

// Form validation
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.classList = "form-control error";
  const small = formControl.querySelector("small");
  small.innerHTML = message;
};

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.classList = "form-control success";
};

const checkEmail = (email) => {
  const regExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regExp.test(String(email.value.trim()))) {
    showSuccess(email);
    return true;
  } else {
    showError(email, `${email.name} is not correct`);
    return false;
  }
};

const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `${input.name} lower than ${min} letters`);
    return false;
  }
  if (input.value.length > max) {
    showError(input, `${input.name} more than ${max} letters`);
    return false
  }
  if (input.value.length >= min && input.value.length <= max)
    showSuccess(input);
    return true;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isNameValid = checkLength(userName, 3, 25);
  const isEmailValid = checkEmail(email);
 
  if (isNameValid && isEmailValid) {
    console.log(12);
  }
});
