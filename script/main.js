// Sticky navbar

const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;

function toggleStickyNavbar() {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

window.addEventListener("scroll", toggleStickyNavbar);

const hamburgerIcon = document.getElementById("navbar_hamburger")

hamburgerIcon.addEventListener("click", function() {
  console.log(hamburgerIcon)
})

