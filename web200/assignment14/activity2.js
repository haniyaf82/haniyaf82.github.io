// activity2.js
// Author: Haniya Fatima
//Activity 2: GET request using AJAX to fetch fake post data
// Reference: https://en.wikiversity.org/wiki/JavaScript_Programming/AJAX_and_JSON

document.getElementById("loadData").addEventListener("click", function() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const post = JSON.parse(xhr.responseText);
            document.getElementById("output").innerHTML =
                `<strong>Post ID:</strong> ${post.id}<br>
                 <strong>Title:</strong> ${post.title}<br>
                 <strong>Body:</strong> ${post.body}`;
        } else {
            document.getElementById("output").textContent = "Failed to load data.";
        }
    };

    xhr.send();
});
