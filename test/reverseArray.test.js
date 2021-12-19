import chai from "chai";
const expect = chai.expect;
import reverseArray from '../08_ReversingArray/reverseArray.js';

describe("reverseArray()", () => {

    describe("main", () => {
        it(`should return an array`, () => {
            expect(reverseArray()).to.be.an('array');
        });

        it(`should only accept an array`, () => {
            expect(reverseArray(1)).to.be.empty;
        });

        it(`should invert elements of an array`, () => {
            expect(reverseArray(["a", 1, "b", 2])).to.deep.equal([2, "b", 1, "a"]);
        });
    });

});
