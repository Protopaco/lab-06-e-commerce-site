import { removeProduct } from './add-remove-product-utils.js';

export function renderProductsAdmin(productObject) {

    const productLI = document.createElement('li');
    const img = document.createElement('img');
    const name = document.createElement('p');
    const price = document.createElement('p');
    const removeButton = document.createElement('button');

    productLI.classList.add('product-list-item')
    img.classList.add('admin-img');
    img.src = `../assets/${productObject.image_src}`;
    
    if (`../assets/${productObject.image_src}` === '../assets/undefined'){
        img.src = `https://www.placecage.com/100/150`
    } 
    
    name.classList.add('admin-name');
    name.textContent = productObject.name;

    price.classList.add('admin-price');
    price.textContent = `$${productObject.price}`;

    removeButton.classList.add('remove-button');
    removeButton.textContent = 'remove';
    removeButton.onclick = function () {
        removeProduct(productObject);
    }

    productLI.appendChild(img);
    productLI.appendChild(name);
    productLI.appendChild(price);
    productLI.appendChild(removeButton);


return productLI;
}