
document.addEventListener("DOMContentLoaded", () => {
    // Change color of header text on hover
    const headerText = document.querySelector("header h1");
    headerText.addEventListener("mouseenter", () => {
        headerText.style.color = "#ff6600";
    });
    headerText.addEventListener("mouseleave", () => {
        headerText.style.color = "#ffffff";
    });

    // Button click animation
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.add("clicked");
            setTimeout(() => {
                button.classList.remove("clicked");
            }, 300); // Duration of the animation
        });
    });
});
