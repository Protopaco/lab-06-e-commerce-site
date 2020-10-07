import { findById } from "./find-by-id.js";

let cartName = 'shopping-cart';


export function addItemToCart(itemID){
    let cartQuantity = 0;

    let cartArray = getFromLocalStorage();
    const itemInCart = findById(cartArray, itemID);
    if (itemInCart) {
        itemInCart.quantity++
        cartQuantity = itemInCart.quantity;
    } else {
        let newCartItem = {
            id: itemID,
            quantity: 1
        }
        cartArray.push(newCartItem);
        cartQuantity = 1;
    }
    setInLocalStorage(cartArray);
    return cartQuantity;
}

export function subtractItemFromCart(itemID){
}


export function setInLocalStorage(value) {
   localStorage.setItem(cartName, JSON.stringify(value));
}


export function getFromLocalStorage() {
    let temp = JSON.parse(localStorage.getItem(cartName));

    return ( temp ? temp : []);
        
}
