// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderProducts } from '../utils/render-products.js';

const test = QUnit.test;

test('should return working li object', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const CF201171F067034 = {
        id: 'CF201171F067034',
        name: 'Black Poldo Dog Couture Edition Insulated Jacket',
        description: 'Sleeveless insulated quilted nylon jacket in black. Stand collar. Press-stud closure at front. Tonal rubberized logo patch, logo plaque, and leash opening at back. Fully lined. Silver-tone hardware.',
        image_src: 'puffy-black.jpg',
        image_alt: 'black puffy dog jacket',
        category: 'canine fashion',
        price: '455'
    }
    
    //Act 
    // Call the function you're testing and set the result to a const
    const expected = '<li id="CF201171F067034"><section class="image-section"><img src="../assets/puffy-black.jpg" alt="black puffy dog jacket"></section><section class="text"><p class="name">Black Poldo Dog Couture Edition Insulated Jacket</p><p class="description">Sleeveless insulated quilted nylon jacket in black. Stand collar. Press-stud closure at front. Tonal rubberized logo patch, logo plaque, and leash opening at back. Fully lined. Silver-tone hardware.</p><section class="subheader"><p class="category">canine fashion</p><p class="price">$455</p></section></section><button class="addToCartButton">+</button></li>';
    const actual = renderProducts(CF201171F067034);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
