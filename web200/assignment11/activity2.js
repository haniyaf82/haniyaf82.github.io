//Activity2.js
// Author: Haniya
// Description: Display window size, screen size, and page URL. Update on window resize.

function showInfo() {
    document.getElementById("windowWidth").textContent = window.innerWidth;
    document.getElementById("windowHeight").textContent = window.innerHeight;
    document.getElementById("screenWidth").textContent = screen.width;
    document.getElementById("screenHeight").textContent = screen.height;
    document.getElementById("pageURL").textContent = window.location.href;
}

// Call it once on page load
showInfo();

//updating the info every time the window is resized
window.addEventListener("resize", showInfo);
