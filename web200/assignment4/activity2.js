// Function to calculate months
function getMonths(years) {
    return years * 12;
}

// Function to calculate days
function getDays(years) {
    return years * 365;
}

// Function to calculate hours
function getHours(years) {
    return getDays(years) * 24;
}

// Function to calculate seconds
function getSeconds(years) {
    return getHours(years) * 60 * 60;
}

// Function to handle button click
document.getElementById("convertAge").addEventListener("click", function() {
    var age = parseFloat(document.getElementById("age").value);

    document.getElementById("months").innerHTML = "Months: " + getMonths(age);
    document.getElementById("days").innerHTML = "Days: " + getDays(age);
    document.getElementById("hours").innerHTML = "Hours: " + getHours(age);
    document.getElementById("seconds").innerHTML = "Seconds: " + getSeconds(age);
});
