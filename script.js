// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener("click", function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute("href"));
//         if (target) {
//             target.scrollIntoView({
//                 behavior: "smooth",
//                 block: "start",
//             });
//         }
//     });
// });

const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

elements.forEach(el => observer.observe(el));


// const menuIcon = document.querySelector('.menu-icon');
// const mobileMenu = document.querySelector('.mobile-menu');
// const mobileNavLinks = document.querySelectorAll('.mobile-nav a');


// // Toggle the menu when the menu icon is clicked
// menuIcon.addEventListener('click', (event) => {
//     // Prevent the event from propagating to the document
//     event.stopPropagation();
//     mobileMenu.classList.toggle('open');
// });

// // Close the menu if any link is clicked
// mobileNavLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         mobileMenu.classList.remove('open');
//     });
// });

// // Close the menu if anywhere else on the page is clicked
// document.addEventListener('click', (event) => {
//     // Only close if the clicked element is not the menu icon or inside the menu
//     if (!mobileMenu.contains(event.target) && !menuIcon.contains(event.target)) {
//         mobileMenu.classList.remove('open');
//     }
// });