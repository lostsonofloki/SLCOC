// Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Grab the button and the navigation menu from the DOM
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Add a click event listener to the button
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            // Toggles the 'active' class on and off
            navLinks.classList.toggle('active');
            
            // Optional: Change the icon from hamburger to an 'X' when open
            if (navLinks.classList.contains('active')) {
                mobileToggle.innerHTML = '&#10005;'; // X symbol
            } else {
                mobileToggle.innerHTML = '&#9776;'; // Hamburger symbol
            }
        });
    }
});
