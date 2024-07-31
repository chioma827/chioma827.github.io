JavaScript (script.js)
document.getElementById('contact-form').addEventListener('submit', function (event) {  
    event.preventDefault();  

    const name = document.getElementById('name').value;  
    const email = document.getElementById('email').value;  
    const message = document.getElementById('message').value;  

    const responseDiv = document.getElementById('form-response');  
    responseDiv.innerHTML = `<p>Thank you, ${name}! Your message has been sent.</p>`;  

    // Clear form fields after submission  
    document.getElementById('contact-form').reset();  
});  