import chai from "chai";
const expect = chai.expect;
import { sumOfRange, sum, range} from '../07_SumOfRange/sumOfRange.js';

describe("sumOfRange(start, end, step)", () => {

    describe("Creating the function", () => {
        it(`should return a number`, () => {
            expect(sumOfRange()).to.be.a('number');
        });
    });

    describe("Parameters", () => {
        it(`should expect arguments to be numbers`, () => {
            expect(sumOfRange(undefined, undefined, undefined)).to.be.a('number');
        });
    });

    describe("Sum function", () => {
        it(`should return a number`, () => {
            expect(sum()).to.be.a('number');
        });
    });

    describe("Range function", () => {
        it(`should return an array`, () => {
            expect(range()).to.be.an('array');
        });
    });

});




