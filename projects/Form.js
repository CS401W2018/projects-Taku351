document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('surveyForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = {
            fullname: document.getElementById('fullname').value.trim(),
            password: document.getElementById('password').value.trim(),
            email: document.getElementById('email').value.trim(),
            birthdate: document.getElementById('birthdate').value,
            phone: document.getElementById('phone').value.trim(),
            gender: document.getElementById('gender').value,
            comments: document.getElementById('comments').value.trim(),

            review: Array.from(document.querySelectorAll('input[name="review"]:checked')).map(cb => cb.value),
            travelClass: document.querySelector('input[name="class"]:checked') ? document.querySelector('input[name="class"]:checked').value : ''
        };

        if (!formData.fullname || !formData.password || !formData.email) {
            alert("Please fill out your Full Name, Password, and Email.");
            return;
        }

        if (formData.password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }

        console.log("Form Data:", formData);

        const xhr = new XMLHttpRequest();

        xhr.open("GET", "submit.json", true);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    try {
                        const response = JSON.parse(xhr.responseText);
                        alert(response.message);
                        form.reset();                   
                    } catch (e) {
                        alert("Error parsing the server response.");
                    }
                } else {
                    alert("Error submitting form. Please try again.");
                }
            }
        };

        xhr.send();
    });
});

