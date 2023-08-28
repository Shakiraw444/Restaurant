const toggle = document.getElementById("toggle");
const navbar = document.querySelector(".navbar");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
