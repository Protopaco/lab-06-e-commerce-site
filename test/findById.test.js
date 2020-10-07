// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { CF201927F095014, canineFashions } from '../data/canine-fashion.js';
import { findById } from '../utils/find-by-id.js';

const test = QUnit.test;

test('test findByID(), send array & id, return JSON', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const anId = 'CF201927F095014';
    const notAnId = 'notanid';

    const expected = CF201927F095014;
    const expected2 = null;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(canineFashions, anId);
    const actual2 = findById(canineFashions, notAnId);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
    expect.equal(actual2, expected2);

});
