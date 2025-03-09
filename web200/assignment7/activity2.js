// Function to calculate average of grades
function calculateAverage(numGrades) {
    var total = 0;

    for (var i = 0; i < numGrades; i++) {
        var grade = parseFloat(prompt("Enter grade " + (i + 1) + ":"));
        total += grade;
    }

    return total / numGrades;
}

// Event listener for button click
document.getElementById("start").addEventListener("click", function() {
    var numGrades = parseInt(document.getElementById("numGrades").value);

    var average = calculateAverage(numGrades);

    document.getElementById("average").innerHTML = "Your average grade is: " + average.toFixed(2);
});
