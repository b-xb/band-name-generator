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
    return array[this.getRandomNumber(array.length)];
  },
  getRandomNumber(i) {
    if (i<0) i=0;
    return Math.floor(Math.random() * i);
  },
  roll(bottom=0,top=0) {
    if (bottom > top) {
      let tmp = top;
      let top = bottom;
      let bottom = top;
    }
    return this.getRandomNumber((top-bottom)+1)+bottom;
  }
}

console.log(bandName.generate());