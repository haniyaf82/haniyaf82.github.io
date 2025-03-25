
document.getElementById("selectedDate").addEventListener("change", function () {
    var dateValue = this.value; // Format: "YYYY-MM-DD"
    var selected = new Date(dateValue);

    document.getElementById("year").textContent = selected.getFullYear();
    document.getElementById("month").textContent = selected.getMonth() + 1; 
    document.getElementById("day").textContent = selected.getDate();
});
