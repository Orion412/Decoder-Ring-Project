// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //exit early if conditions are NOT met
    if (shift == 0 || shift > 25 || shift < -25) return false;
    input = input.toLowerCase();
    const encodedText = [];
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const searchedArray = [...alphabet,...alphabet,...alphabet];
    shift = (encode == true) ? shift : shift*(-1);

    for (letter of input) {
      const letterPosition = alphabet.indexOf(letter);
      if (!alphabet.includes(letter)) {
        encodedText.push(letter);
      }else{
        encodedText.push(searchedArray[letterPosition + 26 + shift]);
      }
    }
    return encodedText.join("");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
