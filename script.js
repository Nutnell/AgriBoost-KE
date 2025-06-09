document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle-button");
    const htmlElement = document.documentElement;


    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
        htmlElement.classList.add(currentTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        htmlElement.classList.add("dark");
    } else {
        htmlElement.classList.add("light");
    }

    themeToggleButton.addEventListener("click", () => {
        if (htmlElement.classList.contains("light")) {
            htmlElement.classList.remove("light");
            htmlElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            htmlElement.classList.remove("dark");
            htmlElement.classList.add("light");
            localStorage.setItem("theme", "light");
        }
    });
});