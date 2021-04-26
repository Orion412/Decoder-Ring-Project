// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {

    //ENCODER////////////

    const encodeTable = {
      a: "11", b: "21", c: "31", d: "41", e: "51",
      f: "12", g: "22", h: "32", i: "42", j: "42",
      k: "52", l: "13", m: "23", n: "33", o: "43",
      p: "53", q: "14", r: "24", s: "34", t: "44",
      u: "54", v: "15", w: "25", x: "35", y: "45",
      z: "55"
    };
    
    //i want "banana pear" to equal "211133113311 53511124"
    //convert to lowerCase and create empty array
    
    input = input.toLowerCase();
    const encodedArray = [];
    if (encode) {
      //break up input into individual elements in new array
      const letters = input.split("");
      //loop through every element of letters result
      //convert letter within new array to encodeTable key value
      for (let letter of letters) {
        const converted = encodeTable[letter];
        //reinsert spaces to empty array
        if (letter == " ") {
          encodedArray.push(" ")
        } else {
          encodedArray.push(converted)
        }
      }
      return encodedArray.join("")
    }

    //DECODER////////////
    //i want "211133113311 53511124" to equal "banana pear"

    const decodeTable = {
      11: "a", 21: "b", 31: "c", 41: "d", 51: "e", 
      12: "f", 22: "g", 32: "h", 42: "i/j", 52: "k",
      13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
      14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
      15: "v", 25: "w", 35: "x", 45: "y", 55: "z"
    }

    //break early if length of end result is odd
    if (input.split(" ").join("").length % 2 !== 0) return false

    //establish empty array
    const decodedArray = [];
    for (let i =0; i < input.length; i++) {
      let temp = input.charAt(i);
       if (temp == " ") {
         decodedArray.push(" ")
        } else {
          temp+= input.charAt(i+1)
          let decodedNum=decodeTable[temp]
          decodedArray.push(decodedNum)
          i++
        }
      }
      return (decodedArray.join(""))
    }



  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
