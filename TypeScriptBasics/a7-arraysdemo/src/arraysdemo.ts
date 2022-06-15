// const carMakers: string[] = [];
const carMakers: string[] = ['Ford', 'Chevrolet', 'Toyota'];
console.log(carMakers);

// Help with inference when extracting values
const car1 = carMakers[0];
const car2 = carMakers.pop();
console.log(car1, car2);
console.log(carMakers);

// Prevent incompatible values
// carMakers.push(100); // Illegal

// Help with 'map'
carMakers.map(
    (car: string): string => {
        console.log(car.toUpperCase());
        return car.toUpperCase();
    }
);

// const dates: Date[] = [];
const dates = [new Date(), new Date()];
console.log(dates);

// const carsByMake: string[][] = [];
const carsByMake: string[][] = [
    ['F150', 'F250', 'F350'],
    ['C150', 'C250', 'C350'],
    ['T150', 'T250', 'T350'],
];
console.log(carsByMake);

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
console.log(importantDates);
