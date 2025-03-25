import {renderCheckoutHeader} from "./checkout/checkoutHeader.js"
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderpaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCartFetch } from "../data/cart.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js'
// import { Car } from "../data/car.js";

async function loadPage() {
  try {
    // throw 'error1';
    await Promise.all([
      loadProductsFetch(),
      loadCartFetch()
    ]);

  } catch (error) {
    console.log('Unexpected error. Please try again later.');
  }

  renderCheckoutHeader();
  renderOrderSummary();
  renderpaymentSummary();

}
loadPage();

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderpaymentSummary();
})
*/

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  })  

}).then((value) => {
  console.log(value)
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderpaymentSummary();
}) */

  /*
loadProducts(() => {
  loadCart(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderpaymentSummary();
  });
});



*/