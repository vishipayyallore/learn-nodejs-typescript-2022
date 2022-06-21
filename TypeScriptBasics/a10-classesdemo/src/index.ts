class Vehicle {

    constructor(protected make: string, protected model: string, protected color: string) {
        this.make = make;
        this.model = model;
        this.color = color;
    }

    protected honk(): void {
        console.log("Honking :: beep!");
    }

}

const vehicle = new Vehicle("Ford", "Mustang", "red");
console.log(`JSON.stringify(vehicle) :: ${JSON.stringify(vehicle)}`);

class Car extends Vehicle {
    constructor(public wheels: number, make: string, model: string, color: string) {
        super(make, model, color);
    }

    private drive(): void {
        console.log("Driving :: vroom!");
    }

    private describeCar(): void {
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Color: ${this.color}`);
        console.log(`Wheels: ${this.wheels}`);
    }

    public startDrivingProcess(): void {
        this.describeCar();
        this.drive();
        this.honk();
    }

}

const car = new Car(4, "Ford", "Mustang", "red");
console.log(`JSON.stringify(car) :: ${JSON.stringify(car)}`);
car.startDrivingProcess();