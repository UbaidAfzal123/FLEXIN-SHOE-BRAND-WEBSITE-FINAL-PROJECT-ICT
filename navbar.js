const navbar = document.getElementById("nav-cont");
const srch = document.getElementById("srch-cont");
const srchInp = document.getElementById("srch-input");
const mobileMenu = document.getElementById("mbl-menu");

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Search Toggle
function toggleSearch() {
  srch.classList.toggle("open");
  if (srch.classList.contains("open")) {
    setTimeout(() => {
      srchInp.focus();
    }, 100);
  }
}

// Mobile Menu
function openMobileMenu() {
  mobileMenu.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
  mobileMenu.classList.remove("open");
  document.body.style.overflow = "";
}

// Close mobile menu when a link is clicked
const mobileLinks = document.querySelectorAll(".mbl-links a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    closeMobileMenu();
  }
});
