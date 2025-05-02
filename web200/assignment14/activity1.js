// activity1.js
// Author: Haniya
// Activity1: Sends form data as JSON using AJAX (POST)
// Reference: https://en.wikiversity.org/wiki/JavaScript_Programming/AJAX_and_JSON

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stop page from reloading

    const data = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        if (xhr.status === 201) {
            document.getElementById("result").innerHTML = "✅ Form submitted successfully!<br><pre>" + xhr.responseText + "</pre>";
        } else {
            document.getElementById("result").innerHTML = "❌ Error submitting form.";
        }
    };

    xhr.send(JSON.stringify(data));
});
