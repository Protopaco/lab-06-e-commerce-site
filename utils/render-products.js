import { addItemToCart, subtractItemFromCart, getCartQuantity, selectionNumberInCart } from './add-remove-from-cart.js';
//import { createDropDownMenu } from './create-drop-down-menu.js';

export function renderProducts (productObject){
    const li = document.createElement('li');
    const image = document.createElement('img');
    const image_widget_list = document.createElement('section');
    const textSection = document.createElement('section');
    const pName = document.createElement('p');
    const pDescription = document.createElement('p')
    const subSection = document.createElement('section');
    const pCategory = document.createElement('p');
    const pPrice = document.createElement('p');
    const cartSection = document.createElement('section');
    const addButton = document.createElement('button');
    const cartStatusDisplay = document.createElement('p');
    const subtractButton = document.createElement('button');
    
    //let dropDownDiv = createDropDownMenu();
    let cartQuantity = getCartQuantity(productObject.id);
    li.id = productObject.id;

    image_widget_list.classList.add('image-section');


    if (productObject.image_list){
        for (let i = 0; i < productObject.image_list.length; i++){
            let temp_widget = document.createElement('img');
            temp_widget.src = `../assets/${productObject.image_list[i]}`
            temp_widget.alt = productObject.image_alt;
            image_widget_list.appendChild(temp_widget);
        }
        li.appendChild(image_widget_list);

    } else {

        image.src = `../assets/${productObject.image_src}`;
        image.alt = productObject.image_alt;
        image_widget_list.appendChild(image);
        li.appendChild(image_widget_list);

    }

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

    cartSection.classList.add('cart-section');

    addButton.classList.add('add-to-cart-button');
    addButton.textContent = '+';
    addButton.onclick = function () {
        //dropDownDiv.style.display = 'block';
        cartQuantity = addItemToCart(productObject.id);
        cartStatusDisplay.textContent = cartQuantity.toString();
        //cartStatusDisplay.appendChild(dropDownDiv);
    };

    //cartStatusDisplay.appendChild(dropDownDiv);
    cartStatusDisplay.classList.add('cart-status-display');
    cartStatusDisplay.innerText = cartQuantity;
    // cartStatusDisplay.onclick = function () {
    //     cartStatusDisplay.childNodes[1].style.display = 'block';
    //     console.log(cartStatusDisplay.childNodes[1].style.display);
    // }

    // cartStatusDisplay.onmouseleave = function () {
    //     dropDownDiv.style.display = 'none';
    // }



    subtractButton.classList.add('subtract-from-cart-button');
    subtractButton.textContent = '-';
    subtractButton.onclick = function () {
        cartQuantity = subtractItemFromCart(productObject.id);
        cartStatusDisplay.textContent = cartQuantity.toString();
        //cartStatusDisplay.append.dropDownDiv;
    };

    subSection.appendChild(pCategory);
    subSection.appendChild(pPrice);

    textSection.appendChild(pName);
    textSection.appendChild(pDescription);
    textSection.appendChild(subSection);

    //cartStatusDisplay.appendChild(dropDownDiv);

    cartSection.appendChild(addButton);
    
    cartSection.appendChild(cartStatusDisplay);
    cartSection.appendChild(subtractButton);

    li.appendChild(textSection);
    li.appendChild(cartSection);

    return li;
}

