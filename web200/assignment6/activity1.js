//function for multiplication
function generateTable(number, count) {
    var result = "";
    var i = 1;  //from 1

    while (i <= count) {
        result += number + " * " + i + " = " + (number * i) + "<br>";
        i++;  //increasing the number
    }

    return result;
}

//event listener
document.getElementById("generateTable").addEventListener("click", function() {
    var number = parseInt(document.getElementById("number").value);
    var count = parseInt(document.getElementById("count").value);

    var output = generateTable(number, count);

    document.getElementById("output").innerHTML = output;
});
