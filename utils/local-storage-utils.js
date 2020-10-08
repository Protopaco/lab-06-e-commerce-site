
let cartName = 'shopping-cart';


export function setInLocalStorage(value) {
    localStorage.setItem(cartName, JSON.stringify(value));
 }
 
 
 export function getFromLocalStorage() {
     let temp = JSON.parse(localStorage.getItem(cartName));
 
     return ( temp ? temp : []);
         
 }
 