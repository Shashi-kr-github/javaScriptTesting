
const { TestWatcher } = require('@jest/core');
const { password } = require('../index');

describe("Password check" , function () {
    test("small passwordlength", () => {
        expect(password("sB@12")).toBe("Length less then 6")
    });

    test("smallcharactermissing", () => {
   
      expect(password("4SHHKH@12")).toBe("Lower Case caracter is missing");
    });
    
    test("valid password", () => {
      expect(password("8Sash@12")).toBe("password is valid");
    });

    
})