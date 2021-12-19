import chai, { expect } from "chai";
const assert = chai.assert;
import triangle from "../01_Triangle/triangle.js";

describe("triangle(n)", () => {

    describe("main", () => {
        it("should return an array", () => {
            expect(triangle()).to.be.an('array');
        });

        it("should have length of n >= 0", () => {
            expect(triangle(-1)).to.have.lengthOf(0);
        });

        it("should contain non-empty strings consisting of only '#'", () => {
            expect(triangle(1)[0]).to.match(/^#*$/);
        });

        it("should have last indexed string have length of n", () => {
            expect(triangle(7)[6]).to.have.lengthOf(7);
        });
    });// main

    describe("Test cases", () => {
        // Array length testing
        function testLength(x, expected){
            it(`Length of Array for n = ${x}\t should be ${expected}`, () => {
                expect(triangle(x)).to.have.lengthOf(expected);
            });
        }
        // n, expected
        testLength(120, 120);
        testLength("d", 0);
        testLength(NaN, 0);

        // Array content value testing
        function testContent(x, index){
            it(`Content for n = ${x} at index = ${index} should have only '#'`, function(){
                expect(triangle(x)[index]).to.match(/^#*$/);
            });
        }
        // n, index
        testContent(12, 0);
        testContent(11, 10);
        testContent(8, 4);

        // Arrary content length testing
        function testContentLength(x, index, expected){
            it(`Length of string for n = ${x} at index = ${index} should be ${expected}`, function(){
                expect(triangle(x)[index]).to.have.lengthOf(expected);
            });
        }
        // n, index, expected
        testContentLength(12, 0, 1);
        testContentLength(5, 4, 5);
        testContentLength(3, 1, 2);
    });// Test cases
});