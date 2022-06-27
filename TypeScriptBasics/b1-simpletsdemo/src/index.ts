// Importing the DEFAULT, and NAMED export from the module
import multiply, { multiplyByTwo } from "./multiply";

var a = 5;
var b = 6;

console.log(`multiply(${a} * ${b}) = ${multiply(a, b)}`);

console.log(`multiplyByTwo(${a}) = ${multiplyByTwo(a)}`);