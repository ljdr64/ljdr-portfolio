const html = document.getElementById("htmlRoot");
const toggleBtn = document.getElementById("toggleThemeBtn");
const icon = document.getElementById("theme-icon");

function updateIcon() {
  if (document.documentElement.classList.contains("dark")) {
    icon.textContent = "🌙";
  } else {
    icon.textContent = "☀️";
  }
}

if (toggleBtn && html) {
  toggleBtn.addEventListener("click", () => {
    html.classList.toggle("dark");
    localStorage.theme = html.classList.contains("dark") ? "dark" : "light";
    updateIcon();
  });
}

updateIcon();
