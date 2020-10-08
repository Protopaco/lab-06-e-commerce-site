import { addProduct } from './add-remove-product-utils.js';

const addProductForm = document.getElementById('new-product-form');

addProductForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newProductObject = {
        id: addProductForm.id.value,
        label: addProductForm.name.value,
        description: addProductForm.description.value,
        img_src: addProductForm.img.value,
        img_alt: addProductForm.img_alt.value,
        price: addProductForm.price.value,
        category: addProductForm.category.value,
    }
    addProduct(newProductObject);
    addProductForm.reset();

})