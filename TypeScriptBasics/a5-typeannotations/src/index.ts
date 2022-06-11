const today = new Date();
console.log(`Month: ${today.getMonth()}`);

const person = {
    age: 20
};
console.log(`Age: ${person.age}`);

class Color {
    constructor(public red: number, public green: number, public blue: number) { }
}
const red = new Color(24, 56, 77);
console.log(`Red: ${JSON.stringify(red)}`);