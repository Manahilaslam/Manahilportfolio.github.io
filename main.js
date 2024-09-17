
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('contact-form');
        const formMessage = document.getElementById('form-message');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Simple client-side validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                formMessage.textContent = 'Please fill out all fields.';
                formMessage.style.color = 'red';
                return;
            }

            // Here you would handle form submission, e.g., send data to a server
            // For demonstration, we'll just clear the form and show a success message

            form.reset(); // Clear the form fields
            formMessage.textContent = 'Thank you for your message. We will get back to you soon!';
            formMessage.style.color = 'green';

            // Optionally, you can use Fetch API or XMLHttpRequest to send data to a server here
        });
    });


    // gallery


    const hero = document.querySelector('.Hero');

    function activate(e) {
      if (e.target.matches('.Hero') || !e.target.matches('.img')) return;
      [hero.src, e.target.src] = [e.target.src, hero.src];
    }
    
    window.addEventListener('click',activate,false);

