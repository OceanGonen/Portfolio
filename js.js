document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust for fixed header height
                behavior: 'smooth'
            });
        });
    });

    // Contact form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted successfully!');
        form.reset();
    });

    // Scroll-based animation for projects
    const projects = document.querySelectorAll('.project');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    projects.forEach(project => {
        observer.observe(project);
    });
});
