import chai from "chai";
const assert = chai.assert;
import{ makeTriangle } from "../01_LoopingTriangle/loopingTriangle.js";

describe("makeTriangle()", function() {
    describe("Testing Array Length:", function(){
        function testLength(x, expected){
            it(`makeTriangle(${x})\n\t:: obj.length should be ${expected}`, function(){
                assert.lengthOf(makeTriangle(x), expected);
            });
        }

        testLength(120, 120);
        testLength(0, 0);
        testLength(-1, 0);
        testLength(1, 1);
        testLength("d", 0);
        testLength("", 0);
        testLength("2", 2);
        testLength("-1", 0);
        testLength(NaN, 0);
        testLength(NaN, 0);
        testLength(" 4 ", 4);
        testLength(" a1 ", 0);
        testLength(" 2a ", 0);
    });

    describe("Testing Return Type", function(){

        function testType(x){
            it(`makeTriangle(${x})\n\t:: return should be Array`, function(){
                assert.typeOf(makeTriangle(x), 'Array');
            });
        }
    
        testType(12);
        testType(-1);
        testType("aB");
        testType(NaN,);
    });
});