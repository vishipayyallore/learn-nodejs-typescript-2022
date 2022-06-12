
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};
console.log(`I Do Not Exist: ${coordinates.IDoNotExist}`); // undefined
console.log(`Type of coordinates: ${typeof coordinates}. Value: ${JSON.stringify(coordinates)}`);

const coordinatesv1: { x: number; y: number } = JSON.parse(json);
console.log(coordinatesv1); // {x: 10, y: 20};
// console.log(`I Do Not Exist: ${coordinatesv1.IDoNotExist}`); // Illegal
console.log(`Type of coordinatesv1: ${typeof coordinatesv1}. Value: ${JSON.stringify(coordinatesv1)}`);


// 2) When we declare a variable on one line
// and initalizate it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean = false;
const findWord = 'green';

for (let i = 0; i < words.length; i++) {
    if (words[i] === findWord) {
        foundWord = true;
    }
}

console.log(`Found word "${findWord}" : ${foundWord}`);

// 3) Variable whose type cannot be inferred correctly
let numbersv1 = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbersv1.length; i++) {
    if (numbersv1[i] > 0) {
        numberAboveZero = numbersv1[i];
    }
}

console.log(`Number above zero: ${numberAboveZero}`);
