function getWeeklyPay(hours, rate) {
    var regularPay, overtimePay, totalPay;

    if (hours > 40) {
        regularPay = 40 * rate;
        overtimePay = (hours - 40) * (rate * 1.5);
        totalPay = regularPay + overtimePay;
    } else {
        totalPay = hours * rate;
    }

    return totalPay;
}

//monthly pay
function getMonthlyPay(weeklyPay) {
    return (weeklyPay * 52) / 12;  // 52 weeks in a year, 12 months in a year
}

//annual pay
function getAnnualPay(weeklyPay) {
    return weeklyPay * 52; 
}

//Event listener
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
