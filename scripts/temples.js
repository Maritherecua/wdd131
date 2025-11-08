// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Populate current year and last modified date
    const currentYearSpan = document.getElementById('currentyear');
    const lastModifiedP = document.getElementById('lastModified');

    // Set current year
    currentYearSpan.textContent = new Date().getFullYear();

    // Set last modified date
    lastModifiedP.textContent = `Last Modified: ${document.lastModified}`;

    // Hamburger menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navigation = document.getElementById('navigation');

    menuToggle.addEventListener('click', function () {
        navigation.classList.toggle('open');
        menuToggle.classList.toggle('open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) {
            navigation.classList.remove('open');
            menuToggle.classList.remove('open');
        }
    });

    // Close menu when clicking on a link
    const navLinks = navigation.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navigation.classList.remove('open');
            menuToggle.classList.remove('open');
        });
    });
});
