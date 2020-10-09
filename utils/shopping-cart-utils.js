import { getProductsFromLocalStorage } from './local-storage-utils.js';
import { renderCartTotal, renderLineItems } from './render-line-items.js';
import { findById } from './find-by-id.js';
import { calcOrderTotal } from './calc-order-total.js';
import { getCartFromLocalStorage, deleteCartFromLocalStorage } from './local-storage-utils.js';


const table = document.getElementById('shopping-cart-table');
const clearButton = document.getElementById('clear-cart');
const placeOrderButton = document.getElementById('place-order');
const products = getProductsFromLocalStorage();


clearButton.addEventListener('click', clearCart);
placeOrderButton.addEventListener('click', placeOrder);


// opens cartArray from localStorage
let cartArray = getCartFromLocalStorage();

// loads cart from cartArray
loadCart(cartArray) 

// populates shopping cart
function loadCart (cartArray) {
    for (let cartItem of cartArray) {

        let selectedItem = (findById(products, cartItem.id));
        let generatedTR = renderLineItems(cartItem, selectedItem);
        table.appendChild(generatedTR);
    }
    const orderTotal = calcOrderTotal(cartArray, products);
    const grandTotalTR = renderCartTotal(orderTotal);
    table.appendChild(grandTotalTR)
}

// clears localStorage and reloads the page
function clearCart() {
    if ( cartArray.length > 0){
    deleteCartFromLocalStorage();
    cartArray = [];
    location.reload();
    location.href = '../products/';
    }
}

// creates alert stating order, clears 
function placeOrder() {
    if (cartArray.length > 0){
        let output = parseCartArray(cartArray);
        alert(output);
        deleteCartFromLocalStorage();
        location.href = '../products/';
    }
}

// translates cart JSON into readable response
function parseCartArray(cartArray){
    let lineBreak = '------------\n'
    let output = lineBreak;
    for (let item of cartArray){
        let itemInfo = findById(products, item.id);
        let id = `Name: ${itemInfo.name} \n`;        
        let quantity = `Quantity: ${item.quantity} \n`;
        output += id + quantity + lineBreak;
    }

    return output;

}