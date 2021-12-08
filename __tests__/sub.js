const { sub } = require('../index')

describe("Subtraction", function () {
  test("Subtraction of 2 Number", () => {
    expect(sub(1, 2)).toBe(-1);
  });

  test("Addition of 2 Negative Numbers", () => {
    expect(sub(3, -6)).toBe(9);
  });
});