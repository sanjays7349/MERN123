document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
        window.location.href = 'login.html';
    }

    document.getElementById('logout-button').addEventListener('click', function() {
        localStorage.removeItem('isLoggedIn');
        window.location.href = 'login.html';
    });
});
