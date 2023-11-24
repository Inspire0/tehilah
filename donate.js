const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hlink = document.querySelector("#hlink");
const faSolid = document.querySelector(".fa-solid");
const donateBtn = document.querySelector(".donateBtn");
const paymentForm = document.querySelector(".paymentForm");
const closeMark = document.querySelector(".closeMark");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  faSolid.classList.toggle("fa-xmark");
});

donateBtn.addEventListener("click", () => {
  paymentForm.classList.remove("hidden");
  b
});

closeMark.addEventListener("click", () => {
  paymentForm.classList.add("hidden");
});
