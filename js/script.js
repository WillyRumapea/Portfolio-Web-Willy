const toogleMenu = document.getElementById("ham-menu");
const navbar = document.getElementById("navbar-nav");
const navLink = document.querySelectorAll(".navbar-link");

toogleMenu.addEventListener("click", () => {
  navbar.classList.toggle("show");
});
for (i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    navbar.classList.toggle("show");
  });
}
