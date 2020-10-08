import { getProductsFromLocalStorage, setProductsInLocalStorage } from './local-storage-utils.js';


export function addProduct(productObject){
    let exisitingProducts = getProductsFromLocalStorage();
    exisitingProducts.push(productObject);
    setProductsInLocalStorage(exisitingProducts);

}