import { getProductsFromLocalStorage, setProductsInLocalStorage } from './local-storage-utils.js';
import { resetAdminProductList } from './admin-utils.js';

export function addProduct(productObject){
    let exisitingProducts = getProductsFromLocalStorage();
    exisitingProducts.push(productObject);
    setProductsInLocalStorage(exisitingProducts);

}

export function removeProduct(productObject){
    let exisitingProducts = getProductsFromLocalStorage();
    exisitingProducts.pop(productObject);
    setProductsInLocalStorage(exisitingProducts);
    resetAdminProductList();
}