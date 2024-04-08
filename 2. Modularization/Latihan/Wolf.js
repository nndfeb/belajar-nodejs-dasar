class Wolf {
  constructor() {
    this.strength = Math.floor(Math.random() * 10);
  }
  howl() {
    console.log("Owoooooo!");
  }
}

// Todo 2
module.exports = Wolf;
