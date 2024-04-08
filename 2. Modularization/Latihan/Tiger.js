class Tiger {
  constructor() {
    this.strength = Math.floor(Math.random() * 10);
  }

  growl() {
    console.log("Gerrr!!");
  }
}

// Todo 1
module.exports = Tiger;
