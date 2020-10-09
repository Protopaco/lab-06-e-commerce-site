import { findById } from "./find-by-id.js";
import { setCartInLocalStorage, getCartFromLocalStorage } from "./local-storage-utils.js";

let cartName = 'shopping-cart';


export function addItemToCart(itemID){
    let cartQuantity = 0;

    let cartArray = getCartFromLocalStorage();
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
    setCartInLocalStorage(cartArray);
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
    setCartInLocalStorage(cartArray);
}

export function subtractItemFromCart(itemID){
    let cartQuantity = '';

    let cartArray = getCartFromLocalStorage();
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
    setCartInLocalStorage(cartArray);
    return cartQuantity;
}

export function getCartQuantity(itemID) {

    let cartArray = getCartFromLocalStorage();
    let itemInCart = findById(cartArray, itemID);
    if (itemInCart){
        return itemInCart.quantity;
    }
    return '';
}
