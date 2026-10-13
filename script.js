// Display a welcome message in the browser console
console.log("Welcome to Venkatesh's Portfolio!");
// Highlight the current page in the navigation
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(function (link) {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.style.color = "#61dafb";
            link.style.fontWeight = "bold";
            link.setAttribute("aria-current", "page");
        }
    });
});
