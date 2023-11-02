const nav = document.querySelector('nav');
const toggleButton = document.querySelector('.btn-toggle');

function toggleResponsiveNav() {
    navLinks.classList.toggle('responsive');
}
// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
const contactForm = document.querySelector('.contact-me form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const subject = document.getElementById('subject').value;

    if (firstName.trim() === '' || lastName.trim() === '' || subject.trim() === '') {
        alert('Please fill in all the fields.');
    } else {
        // Perform your form submission action here, e.g., send data to a server.
        alert('Form submitted successfully.');
        // You can also reset the form here if needed.
        contactForm.reset();
    }
});