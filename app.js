console.log("app.js loaded");

function toggleAccordion(button) {
    const answer = button.nextElementSibling;
    const icon = button.querySelector(".icon");
    document.querySelectorAll(".answer").forEach(element => {
        if (element !== answer) {
            element.classList.remove("active");
        }
    });
    document.querySelectorAll(".icon").forEach(element => {
        if (element !== icon) {
            item.classList.remove("open");
        }
    });
   
    answer.classList.toggle("active");

    if (icon) {
        icon.classList.toggle("open");
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("open");
            menuToggle.setAttribute(
                "aria-expanded",
                menu.classList.contains("open")
            );
        });

    }

});