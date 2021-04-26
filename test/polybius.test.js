const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe ("polybius()", () => {
    it("should translate letters i and j to 42", () => {
        const message = "jiggle";
        const actual = polybius(message);
        const expected = "424222221351";

        expect(actual).to.equal(expected);
    });
    it("should translate 42 to (i/j)", () => {
        const message = "424222221351";
        const actual = polybius(message, false);

        expect(actual).to.include("i");
        expect(actual).to.include("j");
    });
    it("should ignore capitals", () => {
        const message = "A Message";
        const temp = polybius(message, true);
        const actual = polybius(temp, false)
        const expected = "a message";

        expect(actual).to.equal(expected);
    });
    it("should maintain spaces", () => {
        const message = "2345 23513434112251";
        const actual = polybius(message, false);
        const expected = "my message";

        expect(actual).to.equal(expected);
    });
});