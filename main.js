const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle nav to show
    nav.classList.toggle("nav-active");

    // Animate nav-links in mobile
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.5
        }s`;
      }
    });
    // Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// navbar active class
const navLinks = document.querySelectorAll(".nav-item");
const windowPathname = window.location.pathname;

navLinks.forEach((navLink) => {
  if (navLink.href.includes(windowPathname)) {
    navLink.classList.add("active");
  }
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 4000, // Sets the delay (in milliseconds) between slides
  },

  // use of pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});








