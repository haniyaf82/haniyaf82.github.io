//function to calculate average of grades
function calculateAverage(numGrades) {
    var total = 0; //storing the grades
    var count = 0; //counter loop

    while (count < numGrades) {
        var grade = parseFloat(prompt("Enter grade " + (count + 1) + ":"));
        total += grade;
        count++; 
    }

    return total / numGrades;
}

//event listener when button clicked 
document.getElementById("start").addEventListener("click", function() {
    var numGrades = parseInt(document.getElementById("numGrades").value);

    var average = calculateAverage(numGrades);

    document.getElementById("average").innerHTML = "Your average grade is: " + average.toFixed(2);
});
