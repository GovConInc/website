/*
 * Custom JavaScript for the professional website template.
 *
 * The function defined below automatically highlights the active navigation
 * link based on the current page’s file name.  This removes the need to
 * manually adjust the `.active` class on each page and helps keep your
 * navigation bar consistent.  You can extend this script with additional
 * interactive behaviour such as form validation or animations.
 */

document.addEventListener('DOMContentLoaded', function () {
    // Determine the current page (file name)
    const path = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(function (link) {
        const href = link.getAttribute('href');
        if (href === path) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});