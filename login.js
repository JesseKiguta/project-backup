document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // Redirect to another page
        window.location.href = 'welcome.html';
    } else {
        document.getElementById('error-message').innerText = 'Invalid username or password';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.className = savedTheme;
});
