import chai from "chai";
const expect = chai.expect;
import fizzBuzz from '../02_FizzBuzz/fizzBuzz.js';

describe('fizzBuzz(n)', () => {

    describe("main", () => {
        it("should return a string", () => {
            expect(fizzBuzz()).to.be.a('string');
        });

        it("should (only) accept array as argument", () => {
            expect(fizzBuzz("asx")).to.be.empty;
        });

        it("should return 'Fizz' for elements divisible by 3", () => {
            expect(fizzBuzz([3])).to.equal("Fizz");;
        });

        it("should return 'Buzz' for elements divisible by 5", () => {
            expect(fizzBuzz([5])).to.equal("Buzz");;
        });

        it("should return 'FizzBuzz' for elements divisible by 3 AND 5", () => {
            expect(fizzBuzz([15])).to.equal("FizzBuzz");;
        });

        it("should return 'n' otherwise", () => {
            expect(fizzBuzz([8])).to.equal("8");;
        });
    });// main
    
    describe("Test cases", () => {
        function testOutput(arr, expected){
            it(`fizzBuzz(${arr})\tshould return '${expected}'`, () => {
                expect(fizzBuzz(arr)).to.equal(expected);
            })
        }
        
        testOutput([1], '1');
        testOutput([1, 2], '1, 2');
        testOutput([1, 2, 3, 0], '1, 2, Fizz, FizzBuzz');
        testOutput([5, 15, 3], 'Buzz, FizzBuzz, Fizz');
        testOutput([-1, -5, -3], '-1, Buzz, Fizz');
        testOutput([3, undefined, 5, NaN], 'Fizz, Buzz');
    });// Test cases
});
