var assert = require("chai").assert;
var isLuhn = require("../luhn-algorithm");

describe("Luhn algorithm", function() {
  it("should return true if the number respects the luhn algorithm", function() {
    var number = '543215';
    var result = isLuhn.check(number);
    assert.isTrue(result);
  });

  it("should return true if the number respects the luhn algorithm", function() {
    var number = '543216';
    var result = isLuhn.check(number);
    assert.isFalse(result);
  });

  it("should return true if the number respects the luhn algorithm", function() {
    var number = '4716784706865652';
    var result = isLuhn.check(number);
    assert.isTrue(result);
  });

  it("should return true if the number respects the luhn algorithm", function() {
    var number = '4716784700865652';
    var result = isLuhn.check(number);
    assert.isFalse(result);
  });
  
 /*  it("should return false if a word is NOT a palindrome", function() {
    var word = "not";
    assert.isFalse(isPalindrome(word));
  }); */
  
 
});