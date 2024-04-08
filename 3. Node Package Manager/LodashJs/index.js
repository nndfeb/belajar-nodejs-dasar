/**
 * intall lodash dulu
 * * npm install lodash
 */
const initLodash = require("lodash");

const myOddEventArray = initLodash.partition(
  [1, 2, 3, 4, 5, 6, 7, 8],
  (n) => n % 2
);
console.log(myOddEventArray); // Output : [ [ 1, 3, 5, 7 ], [ 2, 4, 6, 8 ] ]
