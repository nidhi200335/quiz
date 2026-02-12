const cuteBtn = document.getElementById("cuteBtn");
const surprise = document.getElementById("surprise");

cuteBtn.addEventListener("click", () => {
  surprise.classList.remove("hidden");
  cuteBtn.style.display = "none";
});