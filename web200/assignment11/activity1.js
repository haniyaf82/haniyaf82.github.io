// Activity1.js
// Author: Haniya
// Description: Display all HTML tag names in the current document.

document.getElementById("showTags").addEventListener("click", function() {
    var tags = document.getElementsByTagName("*");
    var output = "";

    for (var i = 0; i < tags.length; i++) {
        output += tags[i].tagName + "<br>";
    }

    document.getElementById("output").innerHTML = output;
});
