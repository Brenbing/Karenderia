let currentOrder = [];
let currentTotal = 0;

function addItem(name, price) {
  currentOrder.push({ name, price });
  currentTotal += price;

  const li = document.createElement("li");
  li.textContent = ${name} - ₱${price};
  document.getElementById("orderItems").appendChild(li);

  document.getElementById("orderTotal").textContent = currentTotal;
}

function saveOrder() {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  orders.push({
    items: currentOrder,
    total: currentTotal
  });

  localStorage.setItem("orders", JSON.stringify(orders));

  alert("Order placed successfully!");

  currentOrder = [];
  currentTotal = 0;
  document.getElementById("orderItems").innerHTML = "";
  document.getElementById("orderTotal").textContent = "0";
}