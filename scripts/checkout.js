import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { loadProducts } from '../data/products.js';
// import '../data/cart-class.js'; //
//import '../data/car.js'; // Importing the cart data
//import '../data/backend-practice.js'; // Importing the backend practice data
loadProducts(() => {
    renderOrderSummary();
    renderPaymentSummary();
} );
