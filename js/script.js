const links = document.querySelectorAll(".nav a");
const menuBtn = document.querySelector(".btn-menu");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");

function toggleMenu() {
  document.body.classList.toggle("menu-active");
  nav.classList.toggle("active");
  overlay.classList.toggle("active");

  if (nav.classList.contains("active")) {
    menuBtn.setAttribute("aria-expanded", "true");
  } else {
    menuBtn.setAttribute("aria-expanded", "false");
  }
}

links.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 1024) {
      toggleMenu();
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    document.body.classList.remove("menu-active");
    nav.classList.remove("active");
    overlay.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

menuBtn.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);