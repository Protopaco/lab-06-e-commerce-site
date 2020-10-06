// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { calcLineItem } from '../utils/calc-line-item.js';

const test = QUnit.test;

test('test calcLineItem(), sends two numbers, returns product', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const quantity = 5;
    const quantity2 = 3;
    const amount = 500;
    const amount2 = 250;

    const expected = 2500;
    const expected2 = 750;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcLineItem(quantity, amount);
    const actual2 = calcLineItem(quantity2, amount2);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    expect.equal(actual2, expected2);

});
