let menuBtn = document.getElementById("hambMenu");
let menuPC = document.getElementById("menuPC");
let closeBtn = document.getElementById("closeBtn");

menuBtn.addEventListener("click", function () {
  menuPC.classList.remove("hidden");
});
closeBtn.addEventListener("click", function () {
  menuPC.classList.add("hidden");
});
