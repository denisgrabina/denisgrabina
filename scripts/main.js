const mainWrapper = document.getElementById("mainWrapper");
const formBlock = document.getElementById("formBlock");
const close = document.getElementById("close");

const formBlockOpen = () => {
  formBlock.classList.remove("hide");
  formBlock.classList.add("show");
};

const formBlockClose = () => {
  formBlock.classList.remove("show");
  formBlock.classList.add("hide");
};

mainWrapper.addEventListener("click", (e) => {
  if (e.target.id === "contactUs") {
    console.log(123123);
    formBlockOpen();
  }
});

close.addEventListener("click", formBlockClose);
