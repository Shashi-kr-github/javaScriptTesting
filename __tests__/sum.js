
const  { sum } = require('../index');

describe("Addition", function(){

    test("Addition of 2 Number", () => {
      expect(sum(1,2)).toBe(3);
      
    });

    test("Addition of 2 Negative Numbers", () => {
      expect(sum(-8, -6)).toBe(-14);
    });

})
