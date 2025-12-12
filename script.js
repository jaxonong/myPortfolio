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

const quotes = [
  "Keep pushing forward.",
  "Every day is a chance to grow.",
  "Small steps lead to big achievements.",
  "Code, create, and conquer.",
  "Your future is built today.",
  "Believe in your progress.",
  "Dream it. Build it."
];

document.getElementById("quoteText").textContent =
  quotes[Math.floor(Math.random() * quotes.length)];
