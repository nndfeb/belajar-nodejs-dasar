// TODO 1 uat atau impor variabel EventEmitter dari core module events.
const { EventEmitter } = require("events");

const birthDayEventListener = ({ name }) => {
  console.log(`Happy birthday ${name}!`);
};
// TODO 2 Buat variabel myEmitter yang merupakan instance dari EventEmitter.
const myEmitter = new EventEmitter();

// TODO 3 Tentukan birthdayEventListener sebagai aksi ketika event ‘birthday’ dibangkitkan pada myEmitter.
myEmitter.on("birthday", birthDayEventListener);

// TODO 4 Bangkitkanlah event ‘birthday’ pada myEmitter dengan method emit() dan beri nilai argumen listener dengan nama Anda.
myEmitter.emit("birthday", { name: "nedi" });
