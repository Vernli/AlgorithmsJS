const powerOfTwo = require("./poweroftwo");
const isPowerOfTwoBitWise = require("./poweroftwo");

describe("is power of two", () => {
  it("powerOfTwo should be a function", () => {
    expect(typeof powerOfTwo).toEqual("function");
  });
  it("powerOfTwo should return boolean", () => {
    expect(typeof powerOfTwo(3)).toEqual("boolean");
  });
  it("powerOfTwo(4) should return true", () => {
    expect(powerOfTwo(4)).toBeTruthy();
  });
  it("powerOfTwo(0) should return false", () => {
    expect(powerOfTwo(0)).toBeFalsy();
  });
  it("powerOfTwo(4096) should return true", () => {
    expect(powerOfTwo(4096)).toBeTruthy();
  });
});
describe("is power of two (bittwise)", () => {
  it("isPowerOfTwoBitWise should be a function", () => {
    expect(typeof isPowerOfTwoBitWise).toEqual("function");
  });
  it("isPowerOfTwoBitWise should return boolean", () => {
    expect(typeof isPowerOfTwoBitWise(3)).toEqual("boolean");
  });
  it("isPowerOfTwoBitWise(4) should return true", () => {
    expect(isPowerOfTwoBitWise(4)).toBeTruthy();
  });
  it("isPowerOfTwoBitWise(0) should return false", () => {
    expect(isPowerOfTwoBitWise(0)).toBeFalsy();
  });
  it("isPowerOfTwoBitWise(4096) should return true", () => {
    expect(isPowerOfTwoBitWise(4096)).toBeTruthy();
  });
});
