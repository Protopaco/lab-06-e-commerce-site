import { canineFashions } from '../products/canine-fashion.js';
import { cartArray } from '../data/cart.js';
import { renderLineItems } from './render-line-items.js';
import { findById } from './find-by-id.js';

const table = document.getElementById('shopping-cart-table');


for (let cartItem of cartArray) {

    let selectedItem = (findById(canineFashions, cartItem.id));
    let generatedTR = renderLineItems(cartItem, selectedItem);
    table.appendChild(generatedTR);
}