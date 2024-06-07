(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();

document.addEventListener("DOMContentLoaded", () => {
  const logo1 = document.getElementById("logo1");
  const logo2 = document.getElementById("logo2");

  // Start the animation by adding the class
  logo1.classList.add("animate-logo1");
  logo2.classList.add("animate-logo2");
});
