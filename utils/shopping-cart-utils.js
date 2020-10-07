import { canineFashions } from '../data/canine-fashion.js';
import { renderCartTotal, renderLineItems } from './render-line-items.js';
import { findById } from './find-by-id.js';
import { calcOrderTotal } from './calc-order-total.js';

const table = document.getElementById('shopping-cart-table');
const clearButton = document.getElementById('clear-cart');
clearButton.addEventListener('click', clearCart);


// opens cartArray from localStorage
let cartArray = [];
if (localStorage.getItem('cart')){
    cartArray = JSON.parse(localStorage.getItem('cart'));
    console.log(cartArray);
} 

// loads cart from cartArray
loadCart(cartArray) 

// populates shopping cart
function loadCart (cartArray) {
    for (let cartItem of cartArray) {

        let selectedItem = (findById(canineFashions, cartItem.id));
        let generatedTR = renderLineItems(cartItem, selectedItem);
        table.appendChild(generatedTR);
    }
    const orderTotal = calcOrderTotal(cartArray, canineFashions);
    const grandTotalTR = renderCartTotal(orderTotal);
    table.appendChild(grandTotalTR)
}

// clears localStorage and reloads the page
function clearCart() {
    localStorage.clear('cart');
    cartArray = [];
   location.reload()
}