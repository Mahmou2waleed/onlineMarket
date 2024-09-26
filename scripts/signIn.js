document.getElementById('sign-in-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('input-email').value;
    const password = document.getElementById('input-password').value;

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbzAHqGIizUn4ntwSLvg1B6Lf05b18eEo081qpx8UgIEfv0nt-ek9RAFcLYZRMbHuwXrYQ/exec', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }) // نرسل البريد الإلكتروني وكلمة المرور
        });

        // التحقق من حالة الاستجابة
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json(); // نحصل على النتيجة بصيغة JSON

        // تحقق مما إذا كانت الاستجابة ناجحة
        if (result.success) {
            alert("Login successful!");
            // يمكنك إعادة التوجيه إلى صفحة أخرى هنا
        } else {
            alert("Login failed: " + (result.error || 'Invalid email or password.'));
        }
    } catch (error) {
        console.error("Error occurred:", error);
        alert("Error: " + error.message);
    }
});
