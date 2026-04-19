

const modal = document.getElementById("modal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

// Open modal
openBtn.onclick = function() {
  modal.style.display = "block";
};

// Close modal
closeBtn.onclick = function() {
  modal.style.display = "none";
};

// Close when clicking outside
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const toggleBtn = document.querySelector(".navbar-toggler");
const menu = document.querySelector(".hide");
const cut = document.querySelector(".cut");
const head = document.querySelector(".head")


toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
  cut.classList.toggle("show");
  head.classList.toggle("show")
document.getElementById("products").classList.add("dim");


})
cut.addEventListener("click", () => {
  menu.classList.remove("show");
  cut.classList.remove("show");
  head.classList.remove("show");
  document.getElementById("products").classList.remove("dim");
})
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !toggleBtn.contains(e.target)) {
    menu.classList.remove("show");
    cut.classList.remove("show");
    head.classList.remove("show");
  }
})

;

function showDiv(event) {
  event.preventDefault(); // stops page jump

  document.getElementById("Brand").style.display = "block";

  document.getElementById("Budget").style.display = "none";
}
function next(event) {
  event.preventDefault(); // stops page jump
 document.getElementById("Brand").style.display = "none";
  document.getElementById("Budget").style.display = "block";
}