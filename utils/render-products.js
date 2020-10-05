//import { CF201171F067034 } from '../products/canine-fashion.js';

export function renderProducts (productObject){
    const li = document.createElement('li');
    const image = document.createElement('img');
    const textSection = document.createElement('section');
    const pName = document.createElement('p');
    const pDescription = document.createElement('p')
    const subSection = document.createElement('section');
    const pCategory = document.createElement('p');
    const pPrice = document.createElement('p');
    const addButton = document.createElement('button');

    li.id = productObject.id;

    image.src = `../assets/${productObject.image_src}`;
    image.alt = productObject.image_alt;

    textSection.classList.add('text');

    pName.classList.add('name');
    pName.textContent = productObject.name;
    
    pDescription.classList.add('description');
    pDescription.textContent = productObject.description;

    subSection.classList.add('subheader');

    pCategory.classList.add('category');
    pCategory.textContent = productObject.category;

    pPrice.classList.add('price');
    pPrice.textContent = `$${productObject.price}`;

    addButton.classList.add('addToCartButton');
    addButton.textContent = '+';

    subSection.appendChild(pCategory);
    subSection.appendChild(pPrice);

    textSection.appendChild(pName);
    textSection.appendChild(pDescription);
    textSection.appendChild(subSection);

    li.appendChild(image);
    li.appendChild(textSection);
    li.appendChild(addButton);
    
    console.log(li);

    return li;
}

