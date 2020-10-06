import { calcLineItem } from './calc-line-item.js';


export function renderLineItems(cartObject, productObject){
    const itemTR = document.createElement('tr');
    const itemName = document.createElement('td');    
    const itemCost = document.createElement('td');
    const itemQuant = document.createElement('td');
    const itemTotal = document.createElement('td');
    
    itemTR.classList.add('cart-item');

    itemName.classList.add('name');
    itemName.textContent = productObject.name;

    itemCost.classList.add('cost');
    itemCost.textContent = `$${productObject.price}`;

    itemQuant.classList.add('quant');
    itemQuant.textContent = cartObject.quantity;

    let lineTotal = calcLineItem(cartObject.quantity, productObject.price);
    itemTotal.classList.add('total');
    itemTotal.textContent = `$${lineTotal}`;

    itemTR.append(itemName, itemCost, itemQuant, itemTotal);

    return itemTR;


}

export function renderCartTotal(total){
    const totalTR = document.createElement('tr')
    const totalTD = document.createElement('td')
    const dummyTD = document.createElement('td');

    totalTR.classList.add('total-tr');

    totalTD.classList.add('grand-total');
    totalTD.textContent = `$${total}`;

    dummyTD.classList.add('total-space-fill');
    dummyTD.colSpan = 3;

    totalTR.append(dummyTD, totalTD);

    return totalTR;
}