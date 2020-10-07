import { renderProducts } from '../utils/render-products.js';
import { canineFashions } from '../data/canine-fashion.js';
const productList = document.getElementById('product-list');

let carouselList = [];

for (let i = 0; i<canineFashions.length; i++){
    let canineFashion = canineFashions[i];

    let liWidget = renderProducts(canineFashion);
    productList.appendChild(liWidget);
    if(canineFashion.image_list){
        //console.log(liWidget.firstChild.children);
        carouselList.push(liWidget.firstChild.children);
    }
}


var MyIndex = 0;
carousel();

function carousel () {
    for (let i = 0; i < carouselList.length; i++)
    {
       //console.log(carouselList[i][0]);
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




// for (let i = 0; i < carouselList.length; i++) {
//     carouselList[i].addEventListener('mouseenter', function () {
//         let imageList = carouselList[i].firstChild.children;
//         switchImages(imageList);
//        // console.log(carouselList[i].id);
//         //console.log(carouselList[i].firstChild.children);
//         // setTimeout(() => {
//         //     switchImages(carouselList[i].firstChild.children);
//         //     console.log('switch!');
//         // }, 2000);
//         // //displayCount = 0;
//         console.log('fuck you');
//     })
//     carouselList[i].addEventListener('mouseleave', function () {
//         displayCount = 0;
//     })
// }

// let displayCount = 0;

// function switchImages(imageList) {
//     for (var i = 0; i < imageList.length; i++){
//         console.log(i);
//         if (displayCount === i) {
//             imageList[i].style.display = 'block';
//         } else {
//             imageList[i].style.display = 'none';
//         }
//     }
//     displayCount++;
//     if (displayCount > imageList.length){
//         displayCount = 0;
//     }


//     setTimeout( function () {
//         switchImages(imageList);
//     }, 2000);
// }

