const {test, expect} = require("@jest/globals"); // bring only test, expect from jest

const lib = require("./lib");

test("sum", ()=>{
    expect(lib.sum([1,2])).toBe(3);
});

test("avg", ()=>{
    expect(lib.avg([1,2,3,4,5])).toBe(3);
});

test("max", ()=>{
    expect(lib.max([1,2,3])).toBe(3);
});