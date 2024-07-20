const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

var typed = new Typed(".text",{
    strings:["Frontend Developer" , "Backend Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

function submitForm() {
    const form = document.getElementById('contactForm');

    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            form.reset();
            alert('Form submitted successfully!');
        } else {
            alert('Failed to submit form. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        alert('An error occurred. Please try again.');
    });
}
