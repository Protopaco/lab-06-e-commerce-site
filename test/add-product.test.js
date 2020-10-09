// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { addProduct } from '../utils/add-remove-product-utils.js';
import { getProductsFromLocalStorage } from '../utils/local-storage-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const productObject = {
        id: 'testID',
        name: 'testNAME',
        description: 'testDESCRIPTION',
        img_src: 'testIMG',
        img_alt: 'testALT',
        price: '5',
        category: 'canine fashion'
    };
    console.log(productObject)
    addProduct(productObject);
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getProductsFromLocalStorage().pop();
    console.log(actual);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, productObject);
});
