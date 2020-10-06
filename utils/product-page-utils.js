import { renderProducts } from '../utils/render-products.js';
import { canineFashions } from '../products/canine-fashion.js';
const productList = document.getElementById('product-list');

let carouselList = [];

for (let i = 0; i<canineFashions.length; i++){
    let canineFashion = canineFashions[i];
    let liWidget = renderProducts(canineFashion);
    productList.appendChild(liWidget);
    // console.log(canineFashion);
    if(canineFashion.image_list){
        let tempClassName = `${canineFashion.id}-image`;
        carouselList.push(document.getElementsByClassName(tempClassName));
    }
}

//console.log(carouselList);

var MyIndex = 0;
carousel();

function carousel () {
    for (let i = 0; i < carouselList.length; i++)
    {
        // console.log(carouselList[i][0]);
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
        console.log(MyIndex);
        setTimeout(carousel, 2000);
}

