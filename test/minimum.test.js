import chai from "chai";
const expect = chai.expect;
import min from '../04_Minimum/minimum.js';

describe("minimum(a, b):", () => {

    describe("main", () => {
        it(`should return a Number`, () => {
            expect(min()).to.be.a('number');
        });

        it(`should be NaN if 'a' and/or 'b' is NaN`, () => {
            expect(min(NaN, NaN)).to.be.NaN;
        });
    });

    describe("Test cases", () => {
        function test(a, b, expected){
            it(`min(${a}, ${b})\tshould return ${expected}`, () => {
                expect(min(a, b)).to.equal(expected);
            });
        }

        // [a, b, expected]
        let param = {
            1: [2, "5", 2],
            2: [null, null, 0],
            3: [null, -21, -21],
            4: [-0.0009999, -0.001, -0.001],
            6: [-0, 0, 0],
            7: [true, false, 0],
            8: [2, true, 1],
        };

        for(const k in param){
            test(param[k][0], param[k][1], param[k][2]);
        }
    });
});




