document.getElementById('login-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here you would normally send a request to the backend to validate the login
    // For demonstration purposes, let's assume the login is always successful if username is 'user' and password is 'pass'
    if (username === 'sanjay' && password === 'pass') {
        localStorage.setItem('isLoggedIn', 'true');
        alert("Login Successful");
        window.location.href = 'index.html';
    } else {
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = 'Invalid username or password';
    }
});
