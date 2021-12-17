import chai from "chai";
const expect = chai.expect;
import fizzBuzz from '../02_FizzBuzz/fizzBuzz.js';

describe('fizzBuzz', () => {
    function testOutput(arr, expected){
        it('executes', () => {
            expect(fizzBuzz(arr)).to.equal(expected);
        })
    }

    testOutput([1], '1');
    testOutput([1, 2], '1, 2');
    testOutput([1, 2, 3], '1, 2, Fizz');
    testOutput([5, 15, 3], 'Buzz, FizzBuzz, Fizz');
})
