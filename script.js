document.addEventListener("DOMContentLoaded", function() {
    console.log("Bienvenido a GameVerse");

    let links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#fff";
        });

        link.addEventListener("mouseout", () => {
            link.style.color = "#ff0040";
        });
    });
});