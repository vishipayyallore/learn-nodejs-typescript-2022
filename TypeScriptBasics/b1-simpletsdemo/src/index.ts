// Importing the DEFAULT, and NAMED export from the module
import multiply, { multiplyByTwo, IMultiply } from "./multiply";

// Alias for NAMED export
import { multiplyByTwo as mBy2 } from "./multiply";

var a = 5;
var b = 6;

console.log(`multiply(${a} * ${b}) = ${multiply(a, b)}`);

console.log(`multiplyByTwo(${a}) = ${multiplyByTwo(a)}`);

console.log(`mBy2(${(a + b)}) = ${mBy2((a + b))}`);

var values: IMultiply = { a: 5, b: 6 };