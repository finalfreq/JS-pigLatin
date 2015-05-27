var isVowel = function(text) {
  var vowels = ["a", "e", "i", "o", "u", "y"]

  if (vowels.indexOf(text) != -1) {
    return true;
  } else
    return false;
};



var pigLatin = function(text) {
  var output = []
  var letters = text.split('')
  if ((isVowel(text[0])) && (text[0] != "y")) {
    return text + "ay"
  } else
    for (var i = 0; i < letters.length; i++) {
      if ((letters[i] === "q") && (letters[1] === "u")) {
          output.push(letters[0], letters[1])
      } else if    ((isVowel(letters[i]) === false) || (letters[i] === "y")) {
          output.push(letters[i].slice())
      } else
        break;

      }
      return text.slice(output.length, text.length) + text.slice(0, output.length) + "ay"
};


var pigLatinPhrase = function(phrase) {

  var words = phrase.split(" ")
  var pigLatinPhrase = []
  for (var i = 0; i < words.length; i++) {
    pigLatinPhrase.push(pigLatin(words[i]))
  }

  return pigLatinPhrase.join(" ")
};
