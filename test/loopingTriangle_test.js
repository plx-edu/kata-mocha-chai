import chai from "chai";
const assert = chai.assert;
import{ makeTriangle } from "../01_LoopingTriangle/loopingTriangle.js";

describe("makeTriangle()", function() {
    describe("Array length", function(){
        function testLength(x, expected){
            it(`Length test:\n\tmakeTriangle(${x}) return object.length should be ${expected}`, function(){
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

    describe("Return type", function(){

        function testType(x){
            it(`makeTriangle(${x}) return should be an object type`, function(){
                assert.typeOf(makeTriangle(x), "object");
            });
        }
    
        testType(12);
        testType(-1);
        testType("aB");
        testType(NaN,);
    });
});