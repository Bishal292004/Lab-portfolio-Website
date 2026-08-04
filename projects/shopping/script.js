/* =========================================================
   ShopEx — data
   ========================================================= */
const PRODUCTS = [
  { id:'p01', name:'Wireless Over-Ear Headphones', category:'Electronics', price:3499, oldPrice:4299, emoji:'🎧', rating:4.5, desc:'40hr battery, active noise cancelling' },
  { id:'p02', name:'Smart Fitness Watch', category:'Electronics', price:5999, oldPrice:null, emoji:'⌚', rating:4.3, desc:'Heart-rate, SpO2 and sleep tracking' },
  { id:'p03', name:'Mirrorless Camera', category:'Electronics', price:42999, oldPrice:47999, emoji:'📷', rating:4.7, desc:'24MP sensor, 4K video recording' },
  { id:'p04', name:'Bluetooth Portable Speaker', category:'Electronics', price:1899, oldPrice:null, emoji:'🔊', rating:4.2, desc:'Waterproof, 12hr playtime' },
  { id:'p05', name:'Running Sneakers', category:'Fashion', price:2799, oldPrice:3499, emoji:'👟', rating:4.4, desc:'Breathable knit, cushioned sole' },
  { id:'p06', name:'Denim Jacket', category:'Fashion', price:2199, oldPrice:null, emoji:'🧥', rating:4.1, desc:'Classic fit, stonewashed cotton' },
  { id:'p07', name:'Aviator Sunglasses', category:'Fashion', price:899, oldPrice:1299, emoji:'🕶️', rating:4.0, desc:'UV400 protection, metal frame' },
  { id:'p08', name:'Leather Wallet', category:'Fashion', price:749, oldPrice:null, emoji:'👛', rating:4.3, desc:'RFID-blocking, 6 card slots' },
  { id:'p09', name:'Ceramic Table Lamp', category:'Home', price:1599, oldPrice:1999, emoji:'💡', rating:4.2, desc:'Warm-white LED, dimmable' },
  { id:'p10', name:'Insulated Coffee Mug', category:'Home', price:449, oldPrice:null, emoji:'☕', rating:4.6, desc:'Keeps drinks hot for 6 hours' },
  { id:'p11', name:'Cotton Bedsheet Set', category:'Home', price:1899, oldPrice:2299, emoji:'🛏️', rating:4.4, desc:'Queen size, 300 thread count' },
  { id:'p12', name:'Non-stick Cookware Set', category:'Home', price:3299, oldPrice:null, emoji:'🍳', rating:4.5, desc:'5-piece, induction friendly' },
  { id:'p13', name:'Bestseller Novel', category:'Books', price:399, oldPrice:499, emoji:'📖', rating:4.8, desc:'Paperback, award-winning fiction' },
  { id:'p14', name:'Illustrated Cookbook', category:'Books', price:699, oldPrice:null, emoji:'📚', rating:4.6, desc:'120 recipes with step photos' },
  { id:'p15', name:'Basketball', category:'Sports', price:1199, oldPrice:1399, emoji:'🏀', rating:4.3, desc:'Official size, indoor/outdoor' },
  { id:'p16', name:'Yoga Mat', category:'Sports', price:899, oldPrice:null, emoji:'🧘', rating:4.5, desc:'Non-slip, 6mm cushioning' },
  { id:'p17', name:'Perfume — Citrus Bloom', category:'Beauty', price:1699, oldPrice:2099, emoji:'🧴', rating:4.4, desc:'Eau de parfum, 50ml' },
  { id:'p18', name:'Building Blocks Set', category:'Toys', price:1299, oldPrice:null, emoji:'🧱', rating:4.7, desc:'350 pieces, ages 6+' },
];

const GST_RATE = 0.18;
const PROMO_CODES = { 'SHOPEX10': 0.10, 'WELCOME5': 0.05 };

/* =========================================================
   State
   ========================================================= */
let cart = {};              // { productId: quantity }
let activeCategory = 'all';
let searchTerm = '';
let appliedPromo = 0;       // discount fraction

/* =========================================================
   DOM refs
   ========================================================= */
const homeView = document.getElementById('homeView');
const cartView = document.getElementById('cartView');
const productGrid = document.getElementById('productGrid');
const categoryBar = document.getElementById('categoryBar');
const resultsHeading = document.getElementById('resultsHeading');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');
const cartCountEl = document.getElementById('cartCount');
const cartItemsEl = document.getElementById('cartItems');
const cartEmptyState = document.getElementById('cartEmptyState');
const cartLayoutEl = document.querySelector('.cart-layout');
const toastEl = document.getElementById('toast');
const searchInput = document.getElementById('searchInput');
const checkoutModal = document.getElementById('checkoutModal');

/* =========================================================
   Helpers
   ========================================================= */
function formatINR(amount){
  return '₹' + Math.round(amount).toLocaleString('en-IN');
}

function getProduct(id){
  return PRODUCTS.find(p => p.id === id);
}

function cartItemCount(){
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

function showToast(message){
  toastEl.textContent = message;
  toastEl.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toastEl.classList.remove('show'), 2200);
}

/* =========================================================
   View switching
   ========================================================= */
function showHome(){
  homeView.hidden = false;
  cartView.hidden = true;
  window.scrollTo({ top:0, behavior:'smooth' });
}
function showCart(){
  homeView.hidden = true;
  cartView.hidden = false;
  renderCart();
  window.scrollTo({ top:0, behavior:'smooth' });
}

document.getElementById('logoBtn').addEventListener('click', showHome);
document.getElementById('homeNavBtn').addEventListener('click', showHome);
document.getElementById('cartNavBtn').addEventListener('click', showCart);
document.getElementById('continueShoppingBtn').addEventListener('click', showHome);
document.getElementById('emptyCartShopBtn').addEventListener('click', showHome);
document.getElementById('footerCartLink').addEventListener('click', (e) => { e.preventDefault(); showCart(); });

/* =========================================================
   Category bar
   ========================================================= */
function renderCategoryBar(){
  const categories = ['all', ...new Set(PRODUCTS.map(p => p.category))];
  categoryBar.innerHTML = categories.map(cat => `
    <button class="chip ${cat === activeCategory ? 'active' : ''}" data-cat="${cat}">
      ${cat === 'all' ? 'All items' : cat}
    </button>
  `).join('');

  categoryBar.querySelectorAll('.chip').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.cat;
      renderCategoryBar();
      renderProducts();
    });
  });
}

document.querySelectorAll('.footer-links a[data-cat]').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    activeCategory = a.dataset.cat;
    showHome();
    renderCategoryBar();
    renderProducts();
  });
});

/* =========================================================
   Product grid
   ========================================================= */
function getFilteredProducts(){
  return PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm) ||
                           p.category.toLowerCase().includes(searchTerm) ||
                           p.desc.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });
}

function renderProducts(){
  const filtered = getFilteredProducts();
  resultsHeading.textContent = activeCategory === 'all' ? 'All items' : activeCategory;
  resultsCount.textContent = `${filtered.length} item${filtered.length !== 1 ? 's' : ''}`;
  noResults.hidden = filtered.length !== 0;

  productGrid.innerHTML = filtered.map(p => {
    const inCart = !!cart[p.id];
    return `
    <article class="product-card">
      <div class="product-thumb" style="background:${thumbColor(p.category)}">
        <span class="cat-pill">${p.category}</span>
        ${p.emoji}
      </div>
      <div class="product-body">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <p class="product-rating">★ <strong>${p.rating}</strong> rating</p>
        <div class="product-footer">
          <div>
            <span class="price-tag">${formatINR(p.price)}</span>
            ${p.oldPrice ? `<span class="price-old">${formatINR(p.oldPrice)}</span>` : ''}
          </div>
          <button class="btn-add ${inCart ? 'in-cart' : ''}" data-id="${p.id}">
            ${inCart ? `✓ In cart (${cart[p.id]})` : '+ Add'}
          </button>
        </div>
      </div>
    </article>`;
  }).join('');

  productGrid.querySelectorAll('.btn-add').forEach(btn => {
    btn.addEventListener('click', () => addToCart(btn.dataset.id));
  });
}

function thumbColor(category){
  const map = {
    Electronics:'#EAF2FF', Fashion:'#FFF1E8', Home:'#EAFBF6',
    Books:'#F5EEFF', Sports:'#FFF6E0', Beauty:'#FFEAF2', Toys:'#EAFFF0'
  };
  return map[category] || '#F0F1F7';
}

/* =========================================================
   Search
   ========================================================= */
searchInput.addEventListener('input', (e) => {
  searchTerm = e.target.value.trim().toLowerCase();
  renderProducts();
});

/* =========================================================
   Cart actions
   ========================================================= */
function addToCart(id){
  cart[id] = (cart[id] || 0) + 1;
  updateCartCount(true);
  renderProducts();
  const p = getProduct(id);
  showToast(`${p.name} added to cart`);
}

function setQuantity(id, qty){
  if (qty <= 0){
    delete cart[id];
  } else {
    cart[id] = qty;
  }
  updateCartCount(false);
  renderCart();
  renderProducts();
}

function removeFromCart(id){
  delete cart[id];
  updateCartCount(false);
  renderCart();
  renderProducts();
}

function updateCartCount(bump){
  cartCountEl.textContent = cartItemCount();
  if (bump){
    cartCountEl.classList.remove('bump');
    void cartCountEl.offsetWidth; // restart animation
    cartCountEl.classList.add('bump');
  }
}

/* =========================================================
   Cart page render
   ========================================================= */
function renderCart(){
  const ids = Object.keys(cart);

  if (ids.length === 0){
    cartLayoutEl.hidden = true;
    cartEmptyState.hidden = false;
    return;
  }
  cartLayoutEl.hidden = false;
  cartEmptyState.hidden = true;

  cartItemsEl.innerHTML = ids.map(id => {
    const p = getProduct(id);
    const qty = cart[id];
    return `
    <div class="cart-line" data-id="${id}">
      <div class="cart-line-thumb">${p.emoji}</div>
      <div class="cart-line-info">
        <p class="cart-line-name">${p.name}</p>
        <p class="cart-line-cat">${p.category}</p>
        <p class="cart-line-unit">${formatINR(p.price)} each</p>
      </div>
      <div class="qty-control">
        <button class="qty-minus" aria-label="Decrease quantity">−</button>
        <span>${qty}</span>
        <button class="qty-plus" aria-label="Increase quantity">+</button>
      </div>
      <div class="cart-line-total">${formatINR(p.price * qty)}</div>
      <button class="remove-btn" aria-label="Remove item">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0-.7 12.1a2 2 0 0 1-2 1.9H9.7a2 2 0 0 1-2-1.9L7 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </div>`;
  }).join('');

  cartItemsEl.querySelectorAll('.cart-line').forEach(line => {
    const id = line.dataset.id;
    line.querySelector('.qty-plus').addEventListener('click', () => setQuantity(id, cart[id] + 1));
    line.querySelector('.qty-minus').addEventListener('click', () => setQuantity(id, cart[id] - 1));
    line.querySelector('.remove-btn').addEventListener('click', () => removeFromCart(id));
  });

  renderSummary();
}

function calcTotals(){
  const subtotal = Object.entries(cart).reduce((sum, [id, qty]) => sum + getProduct(id).price * qty, 0);
  const discount = subtotal * appliedPromo;
  const taxable = subtotal - discount;
  const gst = taxable * GST_RATE;
  const total = taxable + gst;
  return { subtotal, discount, gst, total };
}

function renderSummary(){
  const { subtotal, discount, gst, total } = calcTotals();
  document.getElementById('summarySubtotal').textContent = formatINR(subtotal);
  document.getElementById('summaryGst').textContent = formatINR(gst);

  const summaryRows = document.querySelector('.cart-summary');
  let discountRow = document.getElementById('summaryDiscountRow');
  if (discount > 0){
    if (!discountRow){
      discountRow = document.createElement('div');
      discountRow.className = 'summary-row';
      discountRow.id = 'summaryDiscountRow';
      document.getElementById('summarySubtotal').closest('.summary-row').after(discountRow);
    }
    discountRow.innerHTML = `<span>Promo discount</span><span class="mono" style="color:var(--teal-dark)">−${formatINR(discount)}</span>`;
  } else if (discountRow){
    discountRow.remove();
  }

  document.getElementById('summaryTotal').textContent = formatINR(total);
}

/* =========================================================
   Promo code
   ========================================================= */
document.getElementById('promoBtn').addEventListener('click', () => {
  const input = document.getElementById('promoInput');
  const code = input.value.trim().toUpperCase();
  const msg = document.getElementById('promoMsg');

  if (!code){
    msg.textContent = 'Enter a code to apply.';
    msg.className = 'promo-msg err';
    return;
  }
  if (PROMO_CODES[code] !== undefined){
    appliedPromo = PROMO_CODES[code];
    msg.textContent = `Applied — ${PROMO_CODES[code] * 100}% off your subtotal.`;
    msg.className = 'promo-msg ok';
  } else {
    appliedPromo = 0;
    msg.textContent = 'That code is not valid.';
    msg.className = 'promo-msg err';
  }
  renderSummary();
});

/* =========================================================
   Checkout
   ========================================================= */
document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (Object.keys(cart).length === 0) return;
  const orderId = 'SX-' + Math.floor(100000 + Math.random() * 900000);
  document.getElementById('modalOrderId').textContent = `Order #${orderId}`;
  checkoutModal.hidden = false;

  cart = {};
  appliedPromo = 0;
  updateCartCount(false);
});

document.getElementById('modalCloseBtn').addEventListener('click', () => {
  checkoutModal.hidden = true;
  showHome();
  renderProducts();
});

/* =========================================================
   Init
   ========================================================= */
renderCategoryBar();
renderProducts();
updateCartCount(false);
