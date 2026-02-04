let currentOrder = [];
let currentTotal = 0;

function addItem(name, price) {
  currentOrder.push({ name, price });
  currentTotal += price;
  renderOrder();
}

function removeItem(index) {
  currentTotal -= currentOrder[index].price;
  currentOrder.splice(index, 1);
  renderOrder();
}

function renderOrder() {
  const list = document.getElementById("orderItems");
  list.innerHTML = "";

  currentOrder.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₱${item.price}`;
    li.onclick = () => removeItem(index);
    list.appendChild(li);
  });

  document.getElementById("orderTotal").textContent = currentTotal;
}

function saveOrder() {
  if (currentOrder.length === 0) {
    alert("Please add items before placing an order.");
    return;
  }

  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  orders.push({
    items: currentOrder,
    total: currentTotal
  });

  localStorage.setItem("orders", JSON.stringify(orders));

  alert("Order placed successfully!");

  currentOrder = [];
  currentTotal = 0;
  renderOrder();
}
