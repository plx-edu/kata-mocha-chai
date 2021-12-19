import chai from "chai";
const expect = chai.expect;
import { josephus, cleanArray, setPrisoners } from '../09_Josephus/josephus.js';

describe("josephus(n, k)", () => {

    describe("main", () => {
        it(`should return an number`, () => {
            expect(josephus()).to.be.an('number');
        });

        it(`for n <= 0 should return NaN`, () => {
            expect(josephus(-2)).to.be.NaN;
        });

        it(`for n = 1 should return 1`, () => {
            expect(josephus(1)).to.equal(1);
        });

        it(`for n > 1 should return an number`, () => {
            expect(josephus(5)).to.be.an('number');
        });

        it(`for n > 1 should return an number`, () => {
            expect(josephus(5)).to.be.an('number');
        });

        it(`should handle k < 0 => abs(k)`, () => {
            expect(josephus(5, "-2")).to.equal(3);
        });
    });// main

    describe("cleanArray()", () => {
        it(`should return an array`, () => {
            expect(cleanArray()).to.be.an('array');
        });

        it(`should remove undefined elements from array`, () => {
            expect(cleanArray([, "a", undefined, 2])).to.deep.equal(["a", 2]);
        });
    });// cleanArray

    describe("setPrisoners()", () => {
        it(`should return an array`, () => {
            expect(setPrisoners()).to.be.an('array');
        });

        it(`should return an array of n length`, () => {
            expect(setPrisoners(11)).to.have.lengthOf(11);
        });
    });// setPrisoners

    describe("Test cases", () => {
        function test(n, k, expected){
            it(`if n = ${n}, k = ${k} expect ${expected}`, () => {
                expect(josephus(n, k)).to.equal(expected);
            });
        }

        // n, k, expected
        test(3, 3, 2);
        test(5, 2, 3);
        test(7, 2, 7);
        test(6, 4, 5);
    });

});
