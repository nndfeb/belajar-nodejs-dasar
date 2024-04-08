/**
 * Aplikasi Node.js biasanya dikenal memiliki pola event-driven atau memiliki alur berdasarkan suatu kejadian. Apa maksudnya itu? Mari kita jelajahi lebih dalam lagi.
 */

/**
 * Node.js menyediakan EventEmitter class yang merupakan member events core module:
 */

const { EventEmitter } = require("events");
const initEventEmitter = new EventEmitter();

// Fungsi yang akan dijalankan ketika evet coffee order terjadi
const makeCoffee = ({ name }) => {
  console.log(`Kopi ${name} telah dibuat`);
};

const maekBill = ({ price }) => {
  console.log(`Bill sebesar ${price} telah dibuat`);
};

/** Message
 *Anda juga bisa mendaftarkan lebih dari satu fungsi listener pada sebuah event menggunakan fungsi on.
 */

// Mendaftarkan fungsi makeCoffee sabagai listener event coffee-order
initEventEmitter.on("coffee-order", makeCoffee);
initEventEmitter.on("coffee-order", maekBill);

/**
 * Atau Anda bisa membuat satu fungsi khusus untuk menangani event. Biasanya fungsi ini memiliki nama ‘handler’ atau ‘listener’ pada akhir penamaanya.
 */

const onCoffeeOrderedListener = ({ name, price }) => {
  makeCoffee(name);
  maekBill(price);
};
initEventEmitter.on("coffee-order", onCoffeeOrderedListener);

// Memicu event 'coffee-order' terjadi
initEventEmitter.emit("coffee-order", { name: "Luak", price: 15000 });

/** Mesage
 * ungsi emit() menerima nilai argumen sebanyak apa pun yang Anda mau, namun nilai yang pertama merupakan nama dari event yang akan dibangkitkan, argumen kedua dan seterusnya adalah nilai yang akan digunakan untuk menjadi dari parameter fungsi listener.
 */
