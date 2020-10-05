import { renderProducts } from '../utils/render-products.js';
import { canineFashions } from '../products/canine-fashion.js';
const productList = document.getElementById('product-list');


for (let i = 0; i<canineFashions.length; i++){
    let canineFashion = canineFashions[i];
    let liWidget = renderProducts(canineFashion);
    productList.appendChild(liWidget);
}