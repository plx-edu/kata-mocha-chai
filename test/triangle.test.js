import chai from "chai";
const assert = chai.assert;
import triangle from "../01_Triangle/triangle.js";

describe("triangle()", function() {

    describe("Testing Array Length:", function(){
        function testLength(x, expected){
            it(`triangle(${x})\n\t:: obj.length should be ${expected}`, function(){
                assert.lengthOf(triangle(x), expected);
            });
        }

        testLength(120, 120);
        // testLength(0, 0);
        // testLength(-1, 0);
        // testLength(1, 1);
        // testLength("d", 0);
        // testLength("", 0);
        // testLength("2", 2);
        // testLength("-1", 0);
        // testLength(NaN, 0);
        // testLength(undefined, 0);
        // testLength(null, 0);
        // testLength(" a1 ", 0);
        // testLength(" 2a ", 0);
    });

    describe("Testing Return Type", function(){

        function testType(x){
            it(`triangle(${x})\n\t:: is Array`, function(){
                assert.isArray(triangle(x));
            });
        }
    
        testType(12);
        // testType(-1);
        // testType("aB");
        // testType(NaN); 
        // testType(null); 
        // testType(undefined); 
    });

    describe("Testing Output Values Type", function(){

        // QUESTIONS: typeOf ou isString/isNotString ??
        function testValueType(x, index, expected){
            it(`triangle(${x})\n\t:: at index(${index}) should be ${expected}`, function(){
                assert.typeOf(triangle(x)[index], expected);
            });
        }
    
        testValueType(12, 0, "string");
        // testValueType(10, 2, "string");
        // testValueType(25, 0, "string");
        // testValueType(11, 10, "string");
        // testValueType(-1, 0, "undefined");
        // testValueType("aB", 1, "undefined");
        // testValueType(NaN, 1, "undefined");
        // testValueType(NaN, 0, "undefined");
        // testValueType(5, 5, "undefined");
        // testValueType(5, NaN, "undefined");
        // testValueType(NaN, NaN, "undefined");
    });

    describe("Testing Output Values Length", function(){

        function testValueLength(x, index, expected){

            // When array cell is NOT out of bound -> if
            if( x > 0 && index <= x && index >= 0){
                it(`triangle(${x})\n\t:: at index(${index}) should be ${expected}`, function(){
                    assert.lengthOf(triangle(x)[index], expected);
                });
            }else {
                it(`triangle(${x})\n\t:: index(${index}) does NOT exist`, function(){
                    assert.notExists(triangle(x)[index]);
                });
            }
        }
    
        testValueLength(12, 0, 1);
        // testValueLength(10, -1);
        // testValueLength(1, 2);
        // testValueLength(0, 0);
        // testValueType(NaN); 
    });

    describe("Testing Output Values", function(){

        function testValue(x, index, expected){
            it(`triangle(${x})\n\t:: at index(${index}) should be ${expected}`, function(){
                assert.strictEqual(triangle(x)[index], expected);
            });
        }

        // Update to use match() and regex
        testValue(12, 0, "#");
        // testValue(12, 11, "############");
        // testValue(0, 0, undefined);
        // testValue(2, 5, undefined);
    });
});