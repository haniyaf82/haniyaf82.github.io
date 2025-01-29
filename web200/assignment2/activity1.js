var hours = prompt("Enter your hours per week:");
var rate = prompt("Enter your rate per hour:");


var weeklyPay = hours * rate;
var monthlyPay = weeklyPay * 52 / 12;
var annualPay = weeklyPay * 52;

document.getElementById("hours").innerHTML = hours;
document.getElementById("rate").innerHTML = "$" + rate;

document.getElementById("weekly").innerHTML = "$" + weeklyPay;
document.getElementById("monthly").innerHTML = "$" + monthlyPay;
document.getElementById("annual").innerHTML = "$" + annualPay;

