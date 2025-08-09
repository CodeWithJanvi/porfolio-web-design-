// Smooth scroll for navbar links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.getAttribute('href');
            document.querySelector(hash).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
