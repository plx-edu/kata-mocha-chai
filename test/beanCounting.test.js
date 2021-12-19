import chai from "chai";
const expect = chai.expect;
import countChar from '../06_BeanCounting/beanCounting.js';

describe("countChar(str, c)", () => {

    describe("Creating the function", () => {
        it(`should return a Number`, () => {
            expect(countChar()).to.be.a('number');
        });
    });

    describe("Counting parameter", () => {
        it(`should expect argument is a string or a number`, () => {
            expect(countChar("444", 4)).to.equal(3);
        });

        it(`should only count characters`, () => {
            expect(countChar("apple", "apple")).to.equal(0);
        });
    });

    describe("Test Cases", () => {
        function testValue(a, b, expected){
            it(`should equal ${expected} if countChar(${a}, ${b})`, () => {
                expect(countChar(a, b)).to.equal(expected);
            });
        }

        // a, b, expected
        // a: string to inspect
        // b: char to count
        let arg = {
            1: ['', '', 0],
            2: ["Test driven developpement", "e", 6],
            3: ["0123a", true, 0],
            4: ["0123b", null, 0],
            6: ["0123.1c", 1, 2],
            7: ["abc", NaN, 0],
            8: ["de", "", 0],
        }

        for(const k in arg){
            testValue(arg[k][0], arg[k][1], arg[k][2]);
        }
    });
});




