let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

console.log(`Type of apples: ${typeof apples}. Value: ${apples}`);
console.log(`Type of speed: ${typeof speed}. Value: ${speed}`);
console.log(`Type of hasName: ${typeof hasName}. Value: ${hasName}`);

let nothingMuch: null = null;
let nothing: undefined = undefined;

console.log(`Type of nothingMuch: ${typeof nothingMuch}. Value: ${nothingMuch}`);
console.log(`Type of nothing: ${typeof nothing}. Value: ${nothing}`);

// built in objects
let now: Date = new Date();
console.log(`Type of now: ${typeof now}. Value: ${now}`);

// Array
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

console.log(`Type of colors: ${typeof colors}. Value: ${colors}`);
console.log(`Type of myNumbers: ${typeof numbers}. Value: ${numbers}`);
console.log(`Type of truths: ${typeof truths}. Value: ${truths}`);

// Classes
class Car {

    constructor(private name: string) {
    }

    drive() {
        console.log(`Driving ${this.name} car !`);
    }
}

let car: Car = new Car('BMW');
console.log(`${JSON.stringify(car)}. ${car.drive()}`);

// Object Literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};
console.log(`Type of point: ${typeof point}. Value: ${JSON.stringify(point)}`);

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(`Logged ${i}`);
}

logNumber(point.x);