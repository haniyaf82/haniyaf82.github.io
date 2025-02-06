/*Create a program that asks the user how old they are in years, 
and then calculate and display their approximate age in months, days, hours, and seconds. 
For example, a person 1 year old is 12 months old, 365 days old, etc.*/

var age = prompt("How old are you in years?");

function calculateAge(){
var months = age * 12;
var days = age * 365;
var hours = age * 365 * 24;
var seconds = age * 365 * 24 * 60 * 60;

document.getElementById("years").innerHTML = age;
document.getElementById("months").innerHTML = months;
document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("seconds").innerHTML = seconds;

}

calculateAge();



