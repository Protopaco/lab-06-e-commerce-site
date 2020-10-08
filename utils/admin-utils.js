import { addProduct } from './add-remove-product-utils.js';
import { renderProductsAdmin } from './render-products-admin.js';
import { getProductsFromLocalStorage } from './local-storage-utils.js';

const addProductForm = document.getElementById('new-product-form');
const currentProductsList = document.getElementById("listed-products");
currentProductsList.classList.add('current-products-list');
resetAdminProductList();

addProductForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newProductObject = {
        id: addProductForm.id.value,
        name: addProductForm.name.value,
        description: addProductForm.description.value,
        img_src: addProductForm.img.value,
        img_alt: addProductForm.img_alt.value,
        price: addProductForm.price.value,
        category: addProductForm.category.value,
    }
    addProduct(newProductObject);
    addProductForm.reset();
    resetAdminProductList();
})

export function resetAdminProductList () {
    currentProductsList.innerHTML = '';
    let productObjects = getProductsFromLocalStorage();
    for (let product of productObjects){
        const renderedProduct = renderProductsAdmin(product);
        currentProductsList.appendChild(renderedProduct);
    }
}