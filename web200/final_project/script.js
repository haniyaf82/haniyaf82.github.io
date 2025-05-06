// Final Project - Pizza Order App

let pizzas = [];

function addPizza() {
  const size = document.getElementById("size").value;
  const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
  const toppings = Array.from(checkboxes).map(cb => cb.value);

  let basePrice = 8;
  if (size === "medium") basePrice = 10;
  if (size === "large") basePrice = 12;

  let toppingPrice = toppings.length * (size === "small" ? 1 : size === "medium" ? 1.5 : 2);
  let totalPrice = basePrice + toppingPrice;

  const pizza = {
    size: size,
    toppings: toppings,
    price: totalPrice.toFixed(2)
  };

  pizzas.push(pizza);
  displayOrder();
}

function displayOrder() {
  const summary = document.getElementById("orderSummary");
  summary.innerHTML = "";

  let total = 0;
  pizzas.forEach((pizza, index) => {
    summary.innerHTML += `<p>Pizza ${index + 1} - Size: ${pizza.size}, Toppings: ${pizza.toppings.join(", ") || "None"}, Price: $${pizza.price}</p>`;
    total += parseFloat(pizza.price);
  });

  let tax = total * 0.10;
  let grandTotal = total + tax;
  summary.innerHTML += `<p>Sales Tax (10%): $${tax.toFixed(2)}</p>`;
  summary.innerHTML += `<p><strong>Total: $${grandTotal.toFixed(2)}</strong></p>`;
}

function submitOrder() {
  const customer = {
    name: document.getElementById("name").value.trim(),
    address: document.getElementById("address").value.trim(),
    phone: document.getElementById("phone").value.trim()
  };

  const comments = document.getElementById("comments").value.trim();

  const order = {
    customer: customer,
    pizzas: pizzas,
    comments: comments
  };

  // AJAX simulation using jsonplaceholder.typicode.com
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onload = function () {
    if (xhr.status === 201) {
      alert("Order submitted successfully!");
      pizzas = [];
      displayOrder();
      document.getElementById("orderForm").reset();
    } else {
      alert("Error sending order.");
    }
  };
  xhr.send(JSON.stringify(order));
}
