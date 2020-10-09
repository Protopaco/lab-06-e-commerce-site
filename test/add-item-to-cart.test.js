// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { addItemToCart } from '../utils/add-remove-from-cart.js';
import { cartArray, testArray } from '../data/cart.js';

const test = QUnit.test;

test('test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const testID = 'CF201171F067035';
    const expected = [{
        id: 'CF201171F067035',
        quantity: 1,
    }];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = testArray;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
