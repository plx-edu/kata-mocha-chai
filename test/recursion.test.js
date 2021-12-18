import chai from "chai";
const expect = chai.expect;
import isEven from '../05_Recursion/recursion.js';

describe('recursion()', () => {

    describe("Return Type", () => {
        function test(x){
            it(`isEven(${x});\treturns a boolean`, () => {
                expect(isEven(x)).to.be.a("boolean");
            })
        }
        
        let param = ['-75', "A", null, undefined, 52, NaN];

        for(const k of param){
            test(k);
        }

    });

    describe("Returns True (only accepts numbers)", () => {
        function test(x){
            it(`isEven(${x});\tshould return True`, () => {
                expect(isEven(x)).to.be.true;
            })
        }
        
        let param = [-748, 2, 14];

        for(const k of param){
            test(k);
        }

    });

    describe("Returns False (only accepts numbers)", () => {
        function test(x){
            it(`isEven(${x});\tshould return False`, () => {
                expect(isEven(x)).to.be.false;
            })
        }
        
        let param = ['-748', 1, null, 17, true, false, "2.2", 2.4];

        for(const k of param){
            test(k);
        }

    });
});
