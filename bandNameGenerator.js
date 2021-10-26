const bandName = {
  _adjectives:["Smelly","Yellow","Blue","Green","Maroon","Yummy","Rolling","Pink","Sunshine","Black","White","Stone","So","Solid","Red","Hot","Terrible","Childish","East","Chemical","Stray","Smashing","Acid","Magic","Glowing","19","Velvet","Bonzo Dog","Doo-Dah","Rebel","Ice","Mr","Ms","Mrs","Mx","Grandmaster","Wu-Tang","Dr.","Dope","Unknown","Mortal","Glass","Big","Super","Crystal","Furry","Washed"],
  _determiners:["the"],
  _nouns:["Behemoth","Band","Star","Fur","Stone","Five","Stars","Stone","Stones","Hootie","Blowfish","Jackson","Jacksons","Floyd","Guns","Roses","Crew","Peppers","Year","Tears","Day","Boys","Girls","Beach","Spice","People","Stairs","17","Gambino","Brothers","Kids","Generation","Sabbath","Pumpkins","Rainbow","Mothers","Temple","Orchestra","Stripes","Banana","Splits","90s","Team","Underground","Motorcycle","Club","T","Flash","Fears","Clan","Doom","Lemon","Animals","Data","Organism","Castles","Out","Chilli","Village"],
  _prepositions:["and","with","under","for"],

  get adjective() { return this.getRandomItem(this._adjectives) },
  get noun() { return this.getRandomItem(this._nouns) },
  get preposition() { return this.getRandomItem(this._prepositions) },
  get determiner() { return this.getRandomItem(this._determiners) },

  get descriptiveNoun() {
    let words = [];
    let numberOfNouns = this.roll(0,2);
    let minAdjectives = numberOfNouns ? 0 : 1;
    let numberOfAdjectives = this.roll(minAdjectives,2);

    while (numberOfAdjectives>0) {
      words.push(this.adjective);
      numberOfAdjectives--;
    }

    while (numberOfNouns>0){
      words.push(this.noun);
      numberOfNouns--;
    }

    return words.join(" ");
  },

  generate() {
    let words = [];

    let numberOfPrepositions = this.roll(0,1);
    let numberOfDeterminers = this.roll(0,1);

    words.push(this.descriptiveNoun);

    if (numberOfPrepositions===1) {
      words.push(this.preposition);
      if (numberOfDeterminers===1) {
        words.push(this.determiner);
      }
      words.push(this.descriptiveNoun);
    }

    return words.join(" ");
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