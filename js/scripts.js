var isVowel = function(text) {
  var vowels = ["a", "e", "i", "o", "u"]

  if (vowels.indexOf(text) != -1) {
    return true;
  } else
    return false;
};



var pigLatin = function(text) {
  var output = []
  var letters = text.split('')
  if (isVowel(text[0])) {
    return text + "ay"
  } else
    for (var i = 0; i < letters.length; i++) {
      if (isVowel(letters[i])) {
        break;
      } else
          output.push(letters[i].slice())

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
