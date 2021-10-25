const bandName = {
  _adjectives:["adjective 1","adjective 2"],
  _determiners:["determiner 1","determiner 2",],
  _nounsSingular:["singular noun 1","singular noun 2"],
  _nounsPlural:["plural noun 1", "plural noun 2"],
  _prepositions:["preposition 1", "preposition 2"],

  get adjective() { return this.getRandomItem(this._adjectives) },
  get noun() { return this.getRandomItem(this._nounsSingular) },
  get nounSingular() { return this.getRandomItem(this._nounsSingular) },
  get nounPlural() { return this.getRandomItem(this._nounsPlural) },
  get preposition() { return this.getRandomItem(this._prepositions) },
  get determiner() { return this.getRandomItem(this._determiner) },

  generate() {
    return "The "+ this.adjective + " " + this.noun; 
  },
  getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
}

console.log(bandName.generate());