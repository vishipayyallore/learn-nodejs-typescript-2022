// Importing the DEFAULT, and NAMED export from the module
import * as multiplyModule from "./multiply";

var a = 50;
var b = 60;

console.log(`multiply(${a} * ${b}) = ${multiplyModule.default(a, b)}`);

console.log(`multiplyByTwo(${a}) = ${multiplyModule.multiplyByTwo(a)}`);