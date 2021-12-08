const { fib } = require("../index");

describe("fibnacci Series" , function () {
    test("5th fibnacci" , () => {
        expect(fib(5)).toBe(5);
    })
})