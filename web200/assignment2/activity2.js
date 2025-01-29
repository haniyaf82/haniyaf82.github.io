// Prompt the user for the distance in miles
var miles = prompt("Enter a distance in miles:");

// Convert miles to a number
miles = parseFloat(miles);

var yardsPerMile = 1760;
var feetPerMile = 5280;
var inchesPerMile = 63360;

var yards = miles * yardsPerMile;
var feet = miles * feetPerMile;
var inches = miles * inchesPerMile;

// Display the results in the console
console.log("The distance in miles is: " + miles);
console.log("Distance in yards: " + yards);
console.log("Distance in feet: " + feet);
console.log("Distance in inches: " + inches);
