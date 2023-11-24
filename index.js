const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hlink = document.querySelector("#hlink");
const faSolid = document.querySelector(".fa-solid");

alert(
  "Welcome to Tehila Foundation... You can Donate, Fund raise or volunteer to Partner with us at the buttom of this page"
);

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  faSolid.classList.toggle("fa-xmark");
});
