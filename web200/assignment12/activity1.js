//Activity1.js
// Author: Haniya Fatima
// Description: multiplication table and creating HTML elements dynamically

function generateTable(number, count) {
    var results = [];

    for (var i = 1; i <= count; i++) {
        results.push(number + " * " + i + " = " + (number * i));
    }

    return results;
}

function displayResults(array) {
    var outputDiv = document.getElementById("output");

    outputDiv.innerHTML = "";
    for (var i = 0; i < array.length; i++) {
        var p = document.createElement("p");
        p.textContent = array[i];
        outputDiv.appendChild(p);
    }
}

document.getElementById("generate").addEventListener("click", function() {
    var number = parseInt(document.getElementById("number").value);
    var count = parseInt(document.getElementById("count").value);
    var tableArray = generateTable(number, count);
    displayResults(tableArray);
});
