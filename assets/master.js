const btn = document.querySelector(".button");
const main = document.querySelector("main");
const icon = document.querySelector(".button>i");
btn.addEventListener("click", () => {
  main.classList.toggle("dark");
  if (main.classList.contains("dark")) {
    icon.className = "bi bi-moon";
    localStorage.setItem("mood", "dark");
  } else {
    icon.className = "bi bi-brightness-high";
    localStorage.setItem("mood", "light");
  }
});

const updateTheme = () => {
  const mood = localStorage.getItem("mood");
  if (mood === "dark") {
    icon.className = "bi bi-moon";
    main.classList.add("dark");
  } else {
    icon.className = "bi bi-brightness-high";
    main.classList.remove("dark");
  }
};

window.addEventListener("DOMContentLoaded", updateTheme);
