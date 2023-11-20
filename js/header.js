const header = document.querySelector("header");
const sectionOne = document.querySelector(".hero");
const headerLinks = document.querySelectorAll('.header__menu-link');
const headerBtn = document.querySelector('.header__btn');
const logoImg = document.getElementById("logo-img");
const headerMobileLogo = document.querySelector('#mobile__logo-img');
const headerWrap = document.querySelector('.header__wrap');
const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px",
};
let activeLinkId = null;
const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
      logoImg.src = "./img/logo-black.png";
      logoImg.style.padding = "0";
      headerWrap.style.paddingTop = "19px";
      headerMobileLogo.src = "./img/logo-black.png";
      headerMobileLogo.style.width = "99px"
    } else {
      header.classList.remove("nav-scrolled");
      logoImg.src = "./img/logo-white.png";
      logoImg.style.padding = "10px 0";
      headerMobileLogo.src = "./img/logo-link.png";

    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const targetId = entry.target.id;
      const targetURI = entry.target.baseURI;
      const targetRef = targetURI.split('#')[1]
      console.log(entry.target)
      headerLinks.forEach((link) => {
        link.classList.remove("active-link");
      });
      
      headerLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${targetRef}`) {
          link.classList.add("active-link");
          activeLinkId = targetId;
        } else {
          link.classList.remove("active-link");
        }
      });

      if(targetId === "buy") {
        headerBtn.classList.add('active-btn')
      } else {
        headerBtn.classList.remove('active-btn')
      }
      if(targetId === "hair-booster-wrap") {
        headerLinks[0].classList.add('active-link');
      }
      if(targetId === "body__product") {
        headerLinks[1].classList.add('active-link');
      }
    }
  });
}, { threshold: 0.5 });

const sections = document.querySelectorAll(".section");
sections.forEach((section) => {
  sectionObserver.observe(section);
});


