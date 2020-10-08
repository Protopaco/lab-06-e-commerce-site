
import { selectionNumberInCart } from './add-remove-from-cart.js';

export function createDropDownMenu () {

const dropDownDiv = document.createElement('ul');
dropDownDiv.classList.add('drop-down-div');

for (let i = 1; i < 6; i++) {
    const cartDropDown = document.createElement('li');
    cartDropDown.textContent = i;
    cartDropDown.classList.add('drop-down-content');
    cartDropDown.onclick = function () {
        selectionNumberInCart(productObject.id, i);
        //cartStatusDisplay.textContent = i;
        dropDownDiv.style.display = 'none';
    }
    dropDownDiv.append(cartDropDown);

}

return dropDownDiv;
}

