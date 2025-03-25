function generateMultiplicationArray(num, times) {
    var results = [];

    for (var i = 1; i <= times; i++) {
        var expression = num + " * " + i + " = " + (num * i);
        results.push(expression);
    }

    return results;
}

//displaying the array values in the HTML
function displayResults(array) {
    var output = "";

    for (var i = 0; i < array.length; i++) {
        output += array[i] + "<br>";
    }

    document.getElementById("output").innerHTML = output;
}

//button click handler
document.getElementById("generate").addEventListener("click", function() {
    var num = parseInt(document.getElementById("number").value);
    var times = parseInt(document.getElementById("count").value);

    var tableArray = generateMultiplicationArray(num, times);
    displayResults(tableArray);
});
