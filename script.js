// script.js

function toggleContactInfo(selectElement) {
    var contactInfoDiv = document.getElementById('contactInfo');

    if (selectElement.value === 'sim') {
        contactInfoDiv.style.display = 'block';
    } else {
        contactInfoDiv.style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const menuItems = document.querySelector(".menu-items");

    hamburgerMenu.addEventListener("click", function() {
        menuItems.classList.toggle("show");
    });
});
