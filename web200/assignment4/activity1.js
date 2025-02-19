// Function to calculate weekly pay
function getWeeklyPay(hours, rate) {
    return hours * rate;
}

// Function to calculate monthly pay
function getMonthlyPay(weeklyPay) {
    return (weeklyPay * 52) / 12;  
}

// Function to calculate annual pay
function getAnnualPay(weeklyPay) {
    return weeklyPay * 52;  
}

// Function to handle button click
document.getElementById("calculatePay").addEventListener("click", function() {
    var hours = parseFloat(document.getElementById("hours").value);
    var rate = parseFloat(document.getElementById("rate").value);

    var weeklyPay = getWeeklyPay(hours, rate);
    var monthlyPay = getMonthlyPay(weeklyPay);
    var annualPay = getAnnualPay(weeklyPay);

    document.getElementById("weekly").innerHTML = "Weekly Pay: $" + weeklyPay.toFixed(2);
    document.getElementById("monthly").innerHTML = "Monthly Pay: $" + monthlyPay.toFixed(2);
    document.getElementById("annual").innerHTML = "Annual Pay: $" + annualPay.toFixed(2);
});
