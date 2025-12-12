const btn = document.getElementById("darkModeToggle");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
