import chai from "chai";
const expect = chai.expect;
import chessboard from '../03_Chessboard/chessboard.js';

describe("chessboard(x):", () => {

    describe('length:', () => {
        function test(x, expected){
            it(`x: ${x}\texpect: ${expected}`, () => {
                expect(chessboard(x)).to.have.lengthOf(expected);
            });
        }
        
        // x: expected
        let param = {
            null: 0,
            "": 0,
            "-2": 0,
            0: 0,
            1: 1,
            "4": 4
        }
        
        test(undefined, 8);

        for(const k in param){
            test(k, param[k]);
        }
    });

    describe('output type:', () => {
        function test(x){
            it(`x: ${x}\ttype: array`, () => {
                expect(chessboard(x)).to.be.an('array');
            });
        }
        

        let param = [undefined, 0, -1, null, "", "str", 7];
        
        for(const k of param){
            test(k);
        }
    });

    describe('index value', () => {
        function test(x, i, expected){
            it(`x: ${x}\tindex:${i}\texpect: ${expected}`, () => {
                expect(chessboard(x)[i]).to.equal(expected);
            });
        }
        
        test(undefined, 0, "🁣🁢🁣🁢🁣🁢🁣🁢");
        test(undefined, 7, "🁢🁣🁢🁣🁢🁣🁢🁣");
        test(1, 0, "🁣");
        test(1, -1, undefined);
        test(1, 1, undefined);
        test(0, 1, undefined);
        test(4, 2, "🁣🁢🁣🁢");
    });
});




