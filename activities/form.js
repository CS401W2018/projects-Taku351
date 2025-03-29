document.getElementById ('myForm').addEventListener('submit', function(event){
    alert("Form Submitted");

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const age = document.getElementById('age').value;

    if (!fullname) {
        alert("You need to enter your name.");
    }

    if (!age || age<18) {
        alert("You need to be 18");
        return;
    }

     const formDate = {
        fullname: fullname,
        email: email,
        password: pass
    }
    
    console.log(fullname);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (hxr.readyState == 4 && xhr.state === 200) {
            alert('Form submitted successfully.');
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.')
        }
    };
    xhr.send(JSON.stringify(formData))
});