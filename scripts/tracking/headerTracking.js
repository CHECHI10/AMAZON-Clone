import { cart } from "../../data/cart.js";

export function renderTrackingHeader() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
  cartQuantity += Number(cartItem.quantity) || 0; // Convert to number and default to 0
  });

  const trackingHeaderHTML = `
    <div class="amazon-header-left-section">
      <a href="amazon.html" class="header-link">
        <img class="amazon-logo"
          src="images/amazon-logo-white.png">
        <img class="amazon-mobile-logo"
          src="images/amazon-mobile-logo-white.png">
      </a>
    </div>

    <div class="amazon-header-middle-section">
      <input class="search-bar" type="text" placeholder="Search">

      <button class="search-button">
        <img class="search-icon" src="images/icons/search-icon.png">
      </button>
    </div>

    <div class="amazon-header-right-section">
      <a class="orders-link header-link" href="orders.html">
        <span class="returns-text">Returns</span>
        <span class="orders-text">& Orders</span>
      </a>

      <a class="cart-link header-link" href="checkout.html">
        <img class="cart-icon" src="images/icons/cart-icon.png">
        <div class="cart-quantity">${cartQuantity}</div>
        <div class="cart-text">Cart</div>
      </a>
    </div>
  `;

  document.querySelector('.js-tracking-header')
    .innerHTML = trackingHeaderHTML;
}