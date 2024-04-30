// const { randomNum, centrigradeToKelvin } = require("./utils");

// console.log(`Random Number is: ${randomNum()}`);
// console.log(`Centigrade to Kelvin: ${centrigradeToKelvin(0, "c")}`);

import getPosts, { getPostsLength as something } from "./postController.js";

console.table(getPosts());
console.log(something());
