const productList = document.getElementById("product-list");
const cartItemsDiv = document.getElementById("cart-items");
const totalText = document.getElementById("total");

let cartItems = [];
let total = 0;

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products?limit=10");
  const data = await res.json();

  productList.innerHTML = data.map(item => `
    <div class="product">
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p>$${item.price}</p>
      <button onclick="addToCart('${item.title}', ${item.price})">Sotib olish</button>
    </div>
  `).join('');
}

function addToCart(name, price) {
  alert(`${name} qo'shildi savatchaga!`);
  cartItems.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  cartItemsDiv.innerHTML = cartItems.map(i => `${i.name} - $${i.price}`).join('<br>');
  totalText.textContent = `Total: $${total.toFixed(2)}`;
}

getData();
