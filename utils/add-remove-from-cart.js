import { findById } from "./find-by-id.js";
import { setInLocalStorage, getFromLocalStorage } from "./local-storage-utils.js";

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

export function selectionNumberInCart(itemID, quantity){

    let cartArray = getFromLocalStorage();
    const itemInCart = findById(cartArray, itemID);
    if (itemInCart) {
        itemInCart.quantity = quantity;
    } else {
        let newCartItem = {
            id: itemID,
            quantity: quantity
        }
        cartArray.push(newCartItem);
    }
    setInLocalStorage(cartArray);
}

export function subtractItemFromCart(itemID){
    let cartQuantity = '';

    let cartArray = getFromLocalStorage();
    const itemInCart = findById(cartArray, itemID);
    if (itemInCart){
        if (itemInCart.quantity > 1){
            itemInCart.quantity--;
            cartQuantity = itemInCart.quantity;
        } else {
            cartArray.pop(itemInCart);
            cartQuantity = '';
        }
    }
    setInLocalStorage(cartArray);
    return cartQuantity;
}

export function getCartQuantity(itemID) {

    let cartArray = getFromLocalStorage();
    let itemInCart = findById(cartArray, itemID);
    if (itemInCart){
        return itemInCart.quantity;
    }
    return '';
}
