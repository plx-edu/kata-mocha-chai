import chai from "chai";
const expect = chai.expect;
import isEven from '../05_Recursion/recursion.js';

describe('recursion(x)', () => {

    describe("main", () => {
        it(`should return a boolean`, () => {
            expect(isEven()).to.be.a("boolean");
        })

        it(`should only accept whole numbers (and type)`, () => {
            expect(isEven("8")).to.be.false;
        })
    });

    describe("Test cases", () => {
        function testTrue(x){
            it(`for x = ${x}\tshould return True`, () => {
                expect(isEven(x)).to.be.true;
            })
        }
        
        function testFalse(x){
            it(`for x = ${x}\tshould return False`, () => {
                expect(isEven(x)).to.be.false;
            })
        }

        let param = [-748, 2, 14];
        for(const k of param){
            testTrue(k);
        }
        
        param = [-1, 17, 29];
        for(const k of param){
            testFalse(k);
        }
    });// Test cases
});
