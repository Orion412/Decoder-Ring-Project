const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
    it("should return false if given alphabet is not 26 characters long", () => {
        const message = "message";
        const alphabet = "short";
        const actual = substitution(message, alphabet);

        expect(actual).to.be.false;
    });
    it("should return false if given alphabet has duplicate characters", () => {
        const message = "message"
        const alphabet = "abcabcabcabcabcabcabcabcab"
        const actual = substitution(message, alphabet);

        expect(actual).to.be.false;
    });
    it("should maintan spaces", () => {
        const message = "yp ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "my message";

        expect(actual).to.equal(expected);
    });
    it("should ignore capitals", () => {
        const message = "Yp Ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl"
        const actual = substitution(message, alphabet, false);
        const expected = "my message";

        expect(actual).to.equal(expected);
    });
});