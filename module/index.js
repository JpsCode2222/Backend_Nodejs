// Fist Import module
const math = require("./math_module.js");

// then use
console.log(math.add(2, 3));
console.log(math.sub(2, 3));
console.log(math.div(2, 3));
console.log(math.mul(2, 3));

// ----------------------------------------------

// OR

// import by individual like that
const { add, sub, mul, div } = require("./math_module.js");

// then use
console.log(add(2, 3));
console.log(sub(2, 3));
console.log(div(2, 3));
console.log(mul(2, 3));
