// MENU DATA
const menuItems = [
  { name: "Adobo", price: 50 },
  { name: "Sinigang", price: 60 },
  { name: "Fried Chicken", price: 45 }
];

let currentOrder = [];
let total = 0;
let totalSales = 0;
let totalOrders = 0;

// DISPLAY MENU
const menuList = document.getElementById("menu");
menuItems.forEach(item => {
  const li = document.createElement("li");
  li.textContent = `${item.name} - ₱${item.price}`;
  li.onclick = () => addToOrder(item);
  menuList.appendChild(li);
});

function addToOrder(item) {
  currentOrder.push(item);
  total += item.price;
  updateOrder();
}

function updateOrder() {
  const orderDiv = document.getElementById("order");
  orderDiv.innerHTML = "";
  currentOrder.forEach(item => {
    const p = document.createElement("p");
    p.textContent = item.name;
    orderDiv.appendChild(p);
  });
  document.getElementById("total").textContent = total;
}

function placeOrder() {
  if (currentOrder.length === 0) return alert("No items ordered!");

  totalSales += total;
  totalOrders++;

  document.getElementById("salesTotal").textContent = totalSales;
  document.getElementById("orderCount").textContent = totalOrders;

  currentOrder = [];
  total = 0;
  updateOrder();
}
