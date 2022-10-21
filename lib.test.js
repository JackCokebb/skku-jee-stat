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

test("med", ()=>{
    expect(lib.med([5,1,2,3,3])).toBe(3);
});

test("med 2", ()=>{
    expect(lib.med([4,4,2,1])).toBe(3);
});

test("med 3", ()=>{
    expect(lib.med([61, 48, 64, 72, 76, 52, 57, 77, 81, 85, 88])).toBe(72);
});

test("iqr", ()=>{
    expect(lib.iqr([48, 64, 72, 76, 52, 57, 77, 81, 85, 88])).toBe(24);
});

test("iqr 2", ()=>{
    expect(lib.iqr([2, 4.5, 3])).toBe(2.5);
});

test("outlier", ()=>{
    expect(lib.outlier([1, 1, 1, 1, 1, 101, 1, 1, 1, 1, 100])).toStrictEqual([101, 100]);
});

test("outlier", ()=>{
    expect(lib.outlier([-18, 1, 2, 3, -5, -2, 4])).toStrictEqual([-18]);
});



