import chai from "chai";
const expect = chai.expect;
import { sumOfRange, sum, range} from '../07_SumOfRange/sumOfRange.js';

describe("sumOfRange(start, end, step)", () => {

    describe("The main function", () => {

        it(`should expect arguments to be numbers`, () => {
            expect(sumOfRange(undefined, undefined, undefined)).to.be.a('number');
        });

        it(`should return a number`, () => {
            expect(sumOfRange()).to.be.a('number');
        });

        it(`should process arguments that are equal`, () => {
            expect(sumOfRange(2, 2)).to.equal(2);
        });

        it(`should process arguments that have positive range start < end`, () => {
            expect(sumOfRange(1, 5)).to.equal(15);
        });

        it(`should process arguments that have negative range start > end`, () => {
            expect(sumOfRange(5, -1)).to.equal(14);
        });

        it(`should handle positive step argument when start < end`, () => {
            expect(sumOfRange(1, 10, 2)).to.equal(25);
        })

        it(`should handle positive step argument when start > end`, () => {
            expect(sumOfRange(10, 1, 2)).to.equal(30);
        })

        it(`should handle negative step argument when start < end`, () => {
            expect(sumOfRange(1, 10, -2)).to.equal(30);
        })

        it(`should handle negative step argument when start > end`, () => {
            expect(sumOfRange(-1, -10, -2)).to.equal(-25);
        })

        it(`should handle 0 step argument `, () => {
            expect(sumOfRange(4, 14, 0)).to.equal(18);
        })
    });


    describe("Sum function", () => {
        it(`should return a number`, () => {
            expect(sum()).to.be.a('number');
        });

        it(`should handle an empty array`, () => {
            expect(sum([])).to.be.a('number');
        });

        it(`should ignore array elements that aren't numbers`, () => {
            // should numbered strings count ? not for the moment...
            expect(sum([1, "eaz", undefined, 2, NaN, 3, "4"])).to.equal(6);
        });
    });

    describe("Range function", () => {
        it(`should return an array`, () => {
            expect(range()).to.be.an('array');
        });
    });

});




