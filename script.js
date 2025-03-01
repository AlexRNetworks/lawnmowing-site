// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Simulate sending form data (replace with actual backend logic)
    console.log('Form submitted:', { name, email, message });
    alert('Thank you for your message! We will get back to you soon.');

    // Reset the form
    document.getElementById('contact-form').reset();
});
