const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links-container");
const navBar = document.querySelector(".navbar");

// Hamburger Menu
toggleButton.addEventListener("click", () => {
  event.preventDefault();
  navbarLinks.classList.toggle("active");
});

// Close mobile hamburger when clicking outside
document.body.addEventListener("click", (event) => {
  const isClickInsideNavbar = navbarLinks.contains(event.target);
  const isClickOnToggleButton = toggleButton.contains(event.target);

  if (!isClickInsideNavbar && !isClickOnToggleButton) {
    closeMobileMenu();
  }
});

function closeMobileMenu() {
  navbarLinks.classList.remove("active");
}

// Locating Section Scroll
function scrollToLocatingSection(event) {
  event.preventDefault();

  const targetElement = document.getElementById("locating");
  const offset = 60;

  const targetPosition =
    targetElement.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: targetPosition - offset,
  });
}

// Cards Experts Section Scroll
function scrollToCardsExpertsSection(event) {
  event.preventDefault();

  const targetElement = document.getElementById("card-experts");
  const offset = 120;

  if (targetElement) {
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: targetPosition - offset,
    });
  }
}

window.addEventListener("scroll", () => {
  if (scrollY > 1) {
    navBar.style.transform = "translateY(-100px)";
    navBar.style.transition = "transform .3s";
  }
  if (scrollY == 0) {
    navBar.style.transform = "translateY(0)";
    navBar.style.boxShadow = "none";
  }
  if (scrollY > 600) {
    navBar.style.transform = "translateY(0)";
    navBar.style.boxShadow = "0 0 5px rgba(0, 0, 0, .5)";
  }
});

// -=GSAP Animations=-
gsap.from(".navbar", { duration: 1, y: "-100%", ease: "bounce" });
gsap.from(".hero-container", { duration: 2, opacity: 0 });
gsap.from(".nav-link", { duration: 1, opacity: 0, delay: 1, stagger: .1 });
