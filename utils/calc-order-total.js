import { findById } from './find-by-id.js';
import { calcLineItem } from './calc-line-item.js';


export function calcOrderTotal(cartArray, productArray){
    let grandTotal = 0;
    
    for (let item of cartArray) {
        let selectedItem = findById(productArray, item.id);
        let subTotal = calcLineItem(item.quantity, selectedItem.price);
        grandTotal += subTotal;
    }

    return grandTotal;
}