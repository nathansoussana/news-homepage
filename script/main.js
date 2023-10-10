const hamburgerIcon = document.getElementById("navbar_icons_hamburger")
const crossIcon = document.getElementById("navbar_icons_cross")
const navbar = document.getElementById("navbar_menu")
const navbarLink = document.getElementsByClassName("navbar_menu_item_link")

hamburgerIcon.addEventListener("click", () => {
  navbar.classList.toggle("navbar_menu_active")
  hamburgerIcon.classList.toggle("navbar_icons_hamburger_active")
  crossIcon.classList.toggle("navbar_icons_cross_active")
})

crossIcon.addEventListener("click", () => {
  navbar.classList.toggle("navbar_menu_active")
  hamburgerIcon.classList.toggle("navbar_icons_hamburger_active")
  crossIcon.classList.toggle("navbar_icons_cross_active")
})

navbar.addEventListener("click", () => {
  navbar.classList.toggle("navbar_menu_active")
  hamburgerIcon.classList.toggle("navbar_icons_hamburger_active")
  crossIcon.classList.toggle("navbar_icons_cross_active")
})