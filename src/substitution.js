// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    
    //set input to lowercase
    //set up gaurd clause
    input = input.toLowerCase()
    if (!alphabet || alphabet.length !== 26) return false
    for (const letter of alphabet) {
      if (alphabet.indexOf(letter) !==
      alphabet.lastIndexOf(letter)) return false
    }

    const realAlphabet = "abcdefghijklmnopqrstuvwxyz "
    const subAlphabet = [...alphabet, " "]
    const encodedText = []

    if (encode) {
      for (let i = 0; i < input.length; i++) {
        encodedText.push(subAlphabet[realAlphabet.indexOf(input[i])])
      }
    } else {
      for (let i = 0; i < input.length; i++) {
        encodedText.push(realAlphabet[subAlphabet.indexOf(input[i])])
      }
    }
    return encodedText.join("")
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
