import chai from "chai";
const expect = chai.expect;
import min from '../04_Minimum/minimum.js';

describe("minimum(a, b):", () => {

    describe("Return type", () => {
        function test(a, b){
            // it(`min(${a}, ${b})\tshould return a Number (${min(a,b)})`, () => {
            it(`min(${a}, ${b})\tshould return a Number`, () => {
                expect(min(a, b)).to.be.a('number');
            });
        }

        let tabA = [undefined, null, NaN, -2, 0, , "5", "A", ["25"], [2,3], [], Object, true, false];
        
        test([], []);
        for(const kA of tabA){ 
            for(const kB of tabA){
                test(kA, kB);
            }

            // Comment this line if needed
            // if commented, will add more tests
            tabA.shift();
        }
    });

    describe("Return element (NaN)", () => {
        function test(a, b){
            it(`min(${a}, ${b})\tshould be NaN`, () => {
                expect(min(a, b)).to.be.NaN;
            });
        }
        
        // [a, b]
        let param = {
            1: [undefined, "5"],
            2: [1, "A"],
            3: [null, undefined],
            4: [NaN, NaN],
        };

        for(const k in param){
            test(param[k][0], param[k][1]);
        }
    });

    describe("Return element (value)", () => {
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
            7: [[], 10, 0],
            8: [true, false, 0],
            8: [2, true, 1],
        };

        for(const k in param){
            test(param[k][0], param[k][1], param[k][2]);
        }
    });
});




