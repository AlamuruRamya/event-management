const email = document.getElementById('email');
const name = document.getElementById('uname');
const password = document.getElementById('password');
const login = document.getElementById('login');
const error = document.getElementById('error');
const form = document.getElementById('form'); // Ensure the form element is correctly referenced

form.addEventListener('submit', (e) => {
    let messages = [];
    
    if (name.value === '' || name.value == null) {
        messages.push('UserName is required');
    }
    
    if (password.value.length <= 6) {
        messages.push('Password must be at least 6 characters');
    }
    
    if (password.value.length >= 20) {
        messages.push('Password must not be longer than 20 characters');
    }
    
    if (messages.length > 0) {
        e.preventDefault();
        error.innerText = messages.join(', ');
    }
});
