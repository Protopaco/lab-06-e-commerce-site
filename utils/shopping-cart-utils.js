import { canineFashions } from '../products/canine-fashion.js';
import { cartArray } from '../data/cart.js';
import { renderCartTotal, renderLineItems } from './render-line-items.js';
import { findById } from './find-by-id.js';
import { calcOrderTotal } from './calc-order-total.js';

const table = document.getElementById('shopping-cart-table');


for (let cartItem of cartArray) {

    let selectedItem = (findById(canineFashions, cartItem.id));
    let generatedTR = renderLineItems(cartItem, selectedItem);
    table.appendChild(generatedTR);
}

const orderTotal = calcOrderTotal(cartArray, canineFashions);
const grandTotalTR = renderCartTotal(orderTotal);
table.appendChild(grandTotalTR);