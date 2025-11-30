const themeIcon = document.getElementById("theme-icon");
const html = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  html.setAttribute("data-theme", "dark");
  themeIcon.classList.replace("ph-moon", "ph-sun");
}

function toggleTheme() {
  const currentTheme = html.getAttribute("data-theme");
  if (currentTheme === "dark") {
    html.setAttribute("data-theme", "light");
    themeIcon.classList.replace("ph-sun", "ph-moon");
    localStorage.setItem("theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
    themeIcon.classList.replace("ph-moon", "ph-sun");
    localStorage.setItem("theme", "dark");
  }
}
