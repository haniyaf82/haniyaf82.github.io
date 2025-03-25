function showDateTime() {
    var now = new Date();

    document.getElementById("year").textContent = now.getFullYear();
    document.getElementById("month").textContent = now.getMonth() + 1; //months are 0-11
    document.getElementById("day").textContent = now.getDate();
    document.getElementById("hour").textContent = now.getHours();
    document.getElementById("minute").textContent = now.getMinutes();
    document.getElementById("second").textContent = now.getSeconds();
}

setInterval(showDateTime, 1000); //updates every 1 second
