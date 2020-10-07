import { renderProducts } from '../utils/render-products.js';
import { canineFashions } from '../data/canine-fashion.js';
const productList = document.getElementById('product-list');

let carouselList = [];

for (let i = 0; i<canineFashions.length; i++){
    let canineFashion = canineFashions[i];

    let liWidget = renderProducts(canineFashion);
    productList.appendChild(liWidget);
    if(canineFashion.image_list){
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

