const menuBtn = document.querySelector('.btn-menu');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const links = document.querySelectorAll('.nav a');

function toggleMenu() {
  nav.classList.toggle('active');
  overlay.classList.toggle('active')
  document.body.classList.toggle('menu-active')

  if (nav.classList.contains('active')) {
    menuBtn.setAttribute('aria-expanded', 'true');
  } else {
    menuBtn.setAttribute('aria-expanded', 'false');
  }
}

links.forEach(link => link.addEventListener('click', toggleMenu))