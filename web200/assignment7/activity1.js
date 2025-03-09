// Function to generate a multiplication table
function generateTable(number, count) {
    var result = "";

    for (var i = 1; i <= count; i++) {
        result += number + " * " + i + " = " + (number * i) + "<br>";
    }

    return result;
}

// Event listener for button click
document.getElementById("generateTable").addEventListener("click", function() {
    var number = parseInt(document.getElementById("number").value);
    var count = parseInt(document.getElementById("count").value);

    var output = generateTable(number, count);

    document.getElementById("output").innerHTML = output;
});
