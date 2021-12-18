import chai from "chai";
const expect = chai.expect;
import min from '../04_Minimum/minimum.js';

describe("minimum(a, b):", () => {

    describe("Return type", () => {
        function test(a, b){
            it(`min(${a}, ${b})\tshould return a Number (${min(a,b)})`, () => {
                expect(min(a, b)).to.be.a('number');
            });
        }
        
        // a: b
        let param = {
            "-5": undefined,
            null: 5,
            4: -4,
            "-1": "1",
            NaN: null,
            null: undefined,
            "-15": [],
            6715: ["z", "a"],
            "A": ["a"],
            "B": ["1", "5"],
            "C": ["5"]
        };
        
        test(undefined, 8);

        for(const k in param){
            test(k, param[k]);
        }
    });


    describe("Return element", () => {
        function test(a, b, expected){
            it(`min(${a}, ${b})\tshould return ${expected}`, () => {
                expect(min(a, b)).to.equal(expected);
            });
        }
        
        // a: b
        let param = {
            5: [undefined, "5"],
            1: ["1", "5"],
        };
        
        test(undefined, 8, 8);

        for(const k in param){
            console.log("##### EQUAL",param[k][0], param[k][1], k);
            test(param[k][0], param[k][1], +k);
        }
    });
});




