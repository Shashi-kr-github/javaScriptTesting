

const { timeTesting } = require('../index');

describe("Second Test" , function () {
  test("less than one minute", () => {
      expect(timeTesting(5200)).toBe("5 seconds")
  })
})

describe(" Minuts &Second Test", function () {
  test("less than one minute", () => {
    expect(timeTesting(200000)).toBe("3 minutes 20 seconds");
  });
});