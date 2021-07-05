/*===== MENU TOGGLE =====*/
const navList = document.querySelector(".nav-list");
const toggleMenu = document.querySelector(".toggle-menu");

toggleMenu.addEventListener("click", () => {
  navList.classList.toggle("open-menu");
  toggleMenu.classList.toggle("open-menu");
});

/*===== SHOW REGISTER MODAL =====*/
const regBtn = document.querySelector(".register-btn");
const regArea = document.querySelector(".register-area");
const regForm = document.querySelector(".register");

regBtn.addEventListener("click", () => {
  regArea.classList.add("show-modal");
});

/*===== CLOSE REGISTER MODAL =====*/
// Hide the popup if you click outside the div
window.addEventListener("click", (e) => {
  if (!regBtn.contains(e.target) && !regForm.contains(e.target)) {
    regArea.classList.remove("show-modal");
  }
});

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  //   Active link
  navLink.forEach((n) => n.classList.remove("active-link"));
  this.classList.add("active-link");

  //   Remove menu mobile
  navList.classList.remove("open-menu");
  toggleMenu.classList.remove("open-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
