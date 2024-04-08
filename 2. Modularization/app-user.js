/**
 * Gunakan object destructuring untuk mengimpor lebih dari satu nilai pada modul.
 */

const { fiesrName, lastName, firstName } = require("./lib/user");
console.log(firstName); // Output : Nendi
console.log(lastName); // Output : Febri
