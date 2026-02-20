document.addEventListener("DOMContentLoaded", function () {
    // Get the theme toggle button
    const themeToggle = document.getElementById("theme-toggle");
    const root = document.documentElement;

    // Get saved theme
    const savedTheme = localStorage.getItem("theme");

    // If user has saved preference, use it
    if (savedTheme === "light") {
        root.classList.remove("dark-theme");
        themeToggle.textContent = "🌜 Dark Mode";
    } else {
        // Default to dark
        root.classList.add("dark-theme");
        themeToggle.textContent = "🌞 Light Mode";
    }

    // Toggle click handler
    themeToggle.addEventListener("click", function () {
        root.classList.toggle("dark-theme");

        const isDark = root.classList.contains("dark-theme");

        themeToggle.textContent = isDark
            ? "🌞 Light Mode"
            : "🌜 Dark Mode";

        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
});
