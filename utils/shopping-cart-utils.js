import { canineFashions } from '../products/canine-fashion.js';
//import { realCartArray as cartArray } from '../data/cart.js';
import { renderCartTotal, renderLineItems } from './render-line-items.js';
import { findById } from './find-by-id.js';
import { calcOrderTotal } from './calc-order-total.js';

const table = document.getElementById('shopping-cart-table');
const clearButton = document.getElementById('clear-cart');

let cartArray = [];
if (localStorage.getItem('cart')){
    cartArray = JSON.parse(localStorage.getItem('cart'));
    console.log(cartArray);
} 

loadCart(cartArray) 

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


console.log(clearButton);
clearButton.addEventListener('click', clearCart);

function clearCart() {
    localStorage.clear('cart');
    cartArray = [];
   location.reload()
}