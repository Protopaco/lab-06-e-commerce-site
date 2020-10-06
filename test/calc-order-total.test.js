// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { cartArray } from '../data/cart.js';
import { canineFashions } from '../products/canine-fashion.js';
import { calcOrderTotal } from '../utils/calc-order-total.js';

const test = QUnit.test;

test('calcOrderTotal() takes in two arrays returns total cost of order', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const expected = 2185;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcOrderTotal(cartArray, canineFashions);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
