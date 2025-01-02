function toggleMenu() {
    const navbarMenu = document.getElementById("navbar-menu");
    if (navbarMenu.style.display === "block") {
        navbarMenu.style.display = "none";
    } else {
        navbarMenu.style.display = "block";
    }
}

// Reset the navbar display on resize
window.addEventListener('resize', () => {
    const navbarMenu = document.getElementById("navbar-menu");
    if (window.innerWidth > 800) {
        navbarMenu.style.display = "flex"; // Ensure nav bar is shown
    } else {
        navbarMenu.style.display = "none"; // Hide nav bar for small screens
    }
});