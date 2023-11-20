const burger = document.querySelector(".header__mobile-burger");
const menu = document.querySelector(".header__mobile");
const dropMenu = document.querySelector(".header__mobile-menu");
const links = document.querySelectorAll(".header__mobile-link");
const wrapper = document.querySelector(".mobile__wrapper");
const logoChange = document.querySelector("#mobile__logo-img");
burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
  dropMenu.classList.toggle("active");
  wrapper.classList.toggle("active");
  logoChange.src = "./img/logo-link.png";
});
logoChange.addEventListener("click", () => {
  menu.classList.remove("active");
  burger.classList.remove("active");
  dropMenu.classList.remove("active");
  wrapper.classList.remove("active");
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    burger.classList.remove("active");
    dropMenu.classList.remove("active");
    wrapper.classList.remove("active");
    logoChange.src = "./img/logo-black.png";
  });
});
