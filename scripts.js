// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (name === '' || email === '') {
        alert('Name and email are required!');
        return false;
    }

    // You can add more complex validation logic as needed

    return true;
}

