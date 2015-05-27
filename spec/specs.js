describe("isVowel",function() {

  it("will return true if letter is a vowel", function() {
    expect(isVowel("e")).to.equal(true);
  });

  it("will return false if the letter is a consonant", function() {
    expect(isVowel("w")).to.equal(false);
  });
});

describe("pigLatin",function() {

  it("will add ay to the end of word that starts with vowel", function() {
    expect(pigLatin("echo")).to.equal("echoay");
  });

  it("will move the consonants to the end and add ay", function(){
    expect(pigLatin("hello")).to.equal("ellohay");
  });

  it("will move the consonants to the end and add ay", function(){
    expect(pigLatinPhrase("hello laura")).to.equal("ellohay auralay");
  });

  it("will treat y as a consonant if its the first letter.", function() {
    expect(pigLatin("year")).to.equal("earyay");
  });

  it("will combine q and u and put them at the end ", function(){
    expect(pigLatin("quiet")).to.equal("ietquay")
  });

});
