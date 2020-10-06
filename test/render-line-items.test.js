// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderLineItems } from '../utils/render-line-items.js';

const test = QUnit.test;

test('renderLineItems(), takes in 2 objects, returns DOM object', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const cartObject = {
        id: 'puffy-coat',
        quantity: 4,
    }

    const productObject = {
        id: 'puffy-coat',
        name: 'Dogs puffy coat',
        description: 'black puffy coat',
        image_src: 'puffy-black.jpg',
        image_list: [
            'puffy-black.jpg',
            'puffy-black2.jpg',
            'puffy-black3.jpg',
            'puffy-black4.jpg',
        ],
        image_alt: 'black puffy dog jacket',
        category: 'canine fashion',
        price: '500',
    }


    const expected = '<tr class="cart-item"><td class="name">Dogs puffy coat</td><td class="cost">$500</td><td class="quant">4</td><td class="total">$2000</td></tr>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderLineItems(cartObject, productObject);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
