const btn = document.getElementById("darkModeToggle");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  btn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

fadeElements.forEach(el => observer.observe(el));
