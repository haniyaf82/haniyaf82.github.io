//Activity1.js
// Author: Haniya
// Description: Simple form validation and enable submit button only when all fields are valid
// Reference: https://en.wikiversity.org/wiki/JavaScript_Programming/Forms_and_Security

// Function to validate form fields
function validateForm() {
    var form = document.getElementById("userForm");
    var errorDiv = document.getElementById("errorMessages");

    if (form.checkValidity()) {
        document.getElementById("submitBtn").disabled = false;
        errorDiv.textContent = ""; // No errors
    } else {
        document.getElementById("submitBtn").disabled = true;
        errorDiv.textContent = "Please fill out all fields correctly.";
    }
}

// Add input event listeners to all form fields
var inputs = document.querySelectorAll("#userForm input");
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", validateForm);
}
