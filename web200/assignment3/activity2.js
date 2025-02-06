// Create a program to prompt the user for hours worked per week and rate per hour and then calculate and display their weekly,
//      monthly, and annual gross pay (hours * rate).
//      Base monthly and annual calculations on 12 months per year and 52 weeks per year.


// Prompt user for input
var hoursPerWeek = prompt("Enter hours worked per week:");
var ratePerHour = prompt("Enter your rate per hour:");

// Convert input to numbers
var hours = parseFloat(hoursPerWeek);
var rate = parseFloat(ratePerHour);

// Functions to calculate pay
function getWeeklyPay(hours, rate) {
    return hours * rate;
}

function getMonthlyPay(weeklyPay) {
    return (weeklyPay * 52) / 12;
}

function getAnnualPay(weeklyPay) {
    return weeklyPay * 52;
}

// Perform calculations
var weeklyPay = getWeeklyPay(hours, rate);
var monthlyPay = getMonthlyPay(weeklyPay);
var annualPay = getAnnualPay(weeklyPay);

// Display results in HTML
document.getElementById("hours").innerHTML = hours;
document.getElementById("rate").innerHTML = "$" + rate;
document.getElementById("weekly").innerHTML = "$" + weeklyPay;
document.getElementById("monthly").innerHTML = "$" + monthlyPay;
document.getElementById("annual").innerHTML = "$" + annualPay;
