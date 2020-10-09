import { renderProducts } from '../utils/render-products.js';
import { seedHardProducts, getProductsFromLocalStorage } from './local-storage-utils.js';
const productList = document.getElementById('product-list');
//const productCartQuantDisplay = document.getElementsByClassName('cart-status-display');
//const addToCartButton = document.getElementsByClassName

if (getProductsFromLocalStorage().length === 0){
    console.log('empty');
    seedHardProducts();
} 
const products = getProductsFromLocalStorage();
console.log(products);

let carouselList = [];

for (let i = 0; i<products.length; i++){
    let product = products[i];

    let liWidget = renderProducts(product);
    productList.appendChild(liWidget);
    if(product.image_list){
        carouselList.push(liWidget.firstChild.children);
    }
}


var MyIndex = 0;
carousel();

function carousel () {
    for (let i = 0; i < carouselList.length; i++)
    {
        for (let j = 0; j < carouselList[i].length; j++) {
            carouselList[i][j].style.display = 'none'
        }
        carouselList[i][MyIndex].style.display = 'block';
    }
    if (MyIndex === carouselList[0].length - 1){
        MyIndex = 0;
    } else {
        MyIndex++;
    }
        setTimeout(carousel, 2500);
}

