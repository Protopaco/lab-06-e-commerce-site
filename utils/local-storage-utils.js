import { canineFashions } from '../data/products.js';

let cartName = 'shopping-cart';
let productName = 'products';


export function setCartInLocalStorage(value) {
    localStorage.setItem(cartName, JSON.stringify(value));
 }
 
 
 export function getCartFromLocalStorage() {
     let temp = JSON.parse(localStorage.getItem(cartName));
 
     return ( temp ? temp : []);
         
 }

 export function seedHardProducts() {
     localStorage.setItem(productName, JSON.stringify(canineFashions));
 }

 export function setProductsInLocalStorage(value) {
    localStorage.setItem(productName, JSON.stringify(value));
 }
 
 
 export function getProductsFromLocalStorage() {
     let temp = JSON.parse((localStorage).getItem(productName));
 
     return ( temp ? temp : []);
         
 }
 
 