document.getElementById('sign-in-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('input-email').value;
    const password = document.getElementById('input-password').value;

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbyEitl60n67Zj9rGAZ4ijZhWxgVuuY3k0uEZD9bJPwx9qa766DsK_FW2M-fokxBQ1yaGQ/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.success) {
            localStorage.setItem('userData', JSON.stringify(result));
            alert("Login successful!");
            window.location.href = 'index.html';
        } else {
            alert("Login failed: " + (result.error || 'Invalid email or password.'));
        }
    } catch (error) {
        console.error("Error occurred:", error);
        alert("Error: " + error.message);
    }
});