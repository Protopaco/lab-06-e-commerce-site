import { getProductsFromLocalStorage, setProductsInLocalStorage } from './local-storage-utils.js';

export function addProduct(productObject){
    let exisitingProducts = getProductsFromLocalStorage();
    exisitingProducts.push(productObject);
    setProductsInLocalStorage(exisitingProducts);

}

export function removeProduct(productObject){
    let exisitingProducts = getProductsFromLocalStorage();
    let newProducts = [];
    for (let product of exisitingProducts){
        if (product.id != productObject.id)
        {
            newProducts.push(product);
        }
    }
    setProductsInLocalStorage(newProducts);
}