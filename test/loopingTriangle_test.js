import chai from "chai";
const assert = chai.assert;
import{ makeTriangle } from "../01_LoopingTriangle/loopingTriangle.js";

describe("makeTriangle()", function() {
    describe("Array length", function(){

        it(`makeTriangle(10) return 10`, function(){
            assert.lengthOf(makeTriangle(10), 10);
        });

        it(`makeTriangle(1) return 1`, function(){
            assert.lengthOf(makeTriangle(1), 1);
        });

        it(`makeTriangle(0) return 0`, function(){
            assert.lengthOf(makeTriangle(0), 0);
        });

        it(`makeTriangle(-1}) return 0`, function(){
            assert.lengthOf(makeTriangle(-1), 0);
        });

        it(`makeTriangle(32) return 32`, function(){
            assert.lengthOf(makeTriangle(32), 32);
        });

        it(`makeTriangle("d") return 0`, function(){
            assert.lengthOf(makeTriangle("d"), 0);
        });
    });
});