const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("ceasar()", () => {
  it("should return false if shift value equals 0", () => {
    const message = "zebra magazine";
    const shift = 0;
    const actual = caesar(message, shift);

    expect(actual).to.be.false;
  });
  it("should return false if shift value < -25", () => {
    const message = "zebra magazine";
    const shift = -26;
    const actual = caesar(message, shift);

    expect(actual).to.be.false;
  });
  it("should return false if shift value > 25", () => {
    const message = "zebra magazine";
    const shift = 26;
    const actual = caesar(message, shift);

    expect(actual).to.be.false;
  });
  it("should ignore capitals", () => {
    const message = "D Phvvdjh";
    const shift = 3;
    const actual = caesar(message, shift, false);
    const expected = "a message"

    expect(actual).to.equal(expected);
  });
  it("should handle shifts at the end of the alphabet", () => {
    const message = "cheud pdjdclqh";
    const shift = 3;
    const actual = caesar(message, shift, false);
    const expected = "zebra magazine"

    expect(actual).to.equal(expected);
  });
  it("should maintain spaces and symbols", () => {
    const message = "d phvvdjh.";
    const shift = 3;
    const actual = caesar(message, shift, false);
    const expected = "a message.";

    expect(actual).to.equal(expected);
  });
});