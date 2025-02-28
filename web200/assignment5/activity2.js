//function to convert age
function convertAge(age, choice) {
    switch (choice) {
        case "M":
            return "Age in months: " + (age * 12);
        case "D":
            return "Age in days: " + (age * 365);
        case "H":
            return "Age in hours: " + (age * 365 * 24);
        case "S":
            return "Age in seconds: " + (age * 365 * 24 * 60 * 60);
        default:
            return "Invalid choice.";
    }
}

//event listener
document.getElementById("convertAge").addEventListener("click", function() {
    var age = parseInt(document.getElementById("age").value);
    var choice = document.getElementById("choice").value;

    var result = convertAge(age, choice);

    document.getElementById("result").innerHTML = result;
});
