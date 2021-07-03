// Show Register Modal
const regBtn = document.querySelector(".register-btn");
const regArea = document.querySelector(".register-area");
const regForm = document.querySelector(".register");

regBtn.addEventListener("click", () => {
  regArea.classList.add("show-modal");
});

// Close Modal
//Hide the popup if you click outside the div
window.addEventListener("click", (e) => {
  if (!regBtn.contains(e.target) && !regForm.contains(e.target)) {
    regArea.classList.remove("show-modal");
  }
});
