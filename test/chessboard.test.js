import chai from "chai";
const expect = chai.expect;
import { chessboard, makeBoard } from '../03_Chessboard/chessboard.js';

describe("chessboard(n):", () => {

    describe('main', () => {
        it("should return a string", () => {
            expect(chessboard()).to.be.a("string");
        });

        it("should accept numbers as arguments", () => {
            expect(chessboard("string")).to.be.equal("");
        });
    });// main

    describe('makeBoard', () => {
        it("should return an array", () => {
            expect(makeBoard()).to.be.an("array");
        });
        
        it("should have default length of 8 if no argument is given", () => {
            expect(makeBoard()).to.have.lengthOf(8);
        });

        it("should have length of n >= 0", () => {
            expect(makeBoard(-1)).to.have.lengthOf(0);
        });
    });// makeBoard

    describe('Test Cases:', () => {
        function testLength(x, expected){
            it(`[Lenght] x: ${x}\texpect: ${expected}`, () => {
                expect(makeBoard(x)).to.have.lengthOf(expected);
            });
        }

        function testValue(x, i, expected){
            it(`[Value] x: ${x}\tindex:${i}\texpect: ${expected}`, () => {
                expect(makeBoard(x)[i]).to.equal(expected);
            });
        }

        // Setup for length testing
        // x: expected
        let param = {
            null: 0,
            "": 0,
            "-2": 0,
            1: 1,
            "4": 4
        };

        for(const k in param){
            testLength(k, param[k]);
        }

        // Setup for value testing
        // [x, i, expected]
        param = {
            1: [undefined, 0, "🁣🁢🁣🁢🁣🁢🁣🁢"],
            2: [undefined, 7, "🁢🁣🁢🁣🁢🁣🁢🁣"],
            3: [1, 0, "🁣"],
            4: [1, -1, undefined],
            5: [0, 1, undefined],
            6: [4, 2, "🁣🁢🁣🁢"],
        };

        for(const k in param){
            testValue(param[k][0], param[k][1], param[k][2]);
        }
    });// Test cases
});




