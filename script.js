const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label",
        isOpen ? "Close navigation" : "Open navigation");
    menuButton.textContent = isOpen ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
        menuButton.textContent = "☰";
    });
});

// Set the date field to today or later.
const dateField = document.getElementById("date");
const today = new Date();
const localToday = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];
dateField.min = localToday;

document.getElementById("year").textContent = new Date().getFullYear();

// Front-end demonstration: no data is transmitted or stored.
document.getElementById("booking-form").addEventListener("submit", event => {
    event.preventDefault();

    const form = event.currentTarget;
    const message = document.getElementById("form-message");

    if (!form.reportValidity()) return;

    message.textContent =
        "Demo only: your form passed validation, but no appointment was sent. Connect a booking service to accept real requests.";

    message.style.color = "#19372e";
});
