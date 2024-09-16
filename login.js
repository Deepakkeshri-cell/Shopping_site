document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get user inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Clear previous error messages
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('authError').textContent = '';

    // Simple validation
    let valid = true;

    // Email validation
    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        valid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
        valid = false;
    }

    if (valid) {
        authenticateUser(email, password);
    }
});

// Email format validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Mock authentication
function authenticateUser(email, password) {
    // Simulate a backend request
    const mockEmail = 'user@shoplogo.com';
    const mockPassword = 'password123';

    if (email === mockEmail && password === mockPassword) {
        alert('Login successful!');
        // Redirect to category.html
        window.location.href = 'index.html'; // 🔥 Redirect to category page
    } else {
        document.getElementById('authError').textContent = 'Invalid email or password';
    }
}
