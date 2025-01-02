function toggleMenu() {
    const navbarMenu = document.getElementById("navbar-menu");
    const computedStyle = window.getComputedStyle(navbarMenu);

    if (computedStyle.display === "block") {
        navbarMenu.style.display = "none";
    } else {
        navbarMenu.style.display = "block";
    }
}

// Function to set the navbar display based on window size
function setNavbarDisplay() {
    const navbarMenu = document.getElementById("navbar-menu");
    if (window.innerWidth > 800) {
        navbarMenu.style.display = "flex"; // Ensure nav bar is shown
    } else {
        navbarMenu.style.display = "none"; // Hide nav bar for small screens
    }
}

// Set the navbar display on initial load
window.addEventListener('load', setNavbarDisplay);

// Reset the navbar display on resize
window.addEventListener('resize', setNavbarDisplay);
