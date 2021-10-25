const bandName = {
  _adjectives:["adjective"],
  _determiners:["determiner"],
  _nounsSingular:["singular noun"],
  _nounsPlural:["plural noun"],
  _prepositions:["preposition"],

  get adjective() { return "word" },
  get noun() { return "word" },
  get nounSingular() { return "word" },
  get nounPlural() { return "word" },
  get preposition() { return "word" },
  get determiner() { return "word" },

  generate() {
    return "Band Name"; 
  },
  getRandomItem(array) {
    return "word";
  }
}

console.log(bandName.generate());