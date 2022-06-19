class Vehicle {

    constructor(public make: string, public model: string, public color: string) {
        this.make = make;
        this.model = model;
        this.color = color;
    }

    protected honk(): void {
        console.log("Honking :: beep!");
    }

    protected describeVehicle(): void {
        console.log(`Make: ${vehicle.make}`);
        console.log(`Model: ${vehicle.model}`);
        console.log(`Color: ${vehicle.color}`);
    }
}

const vehicle = new Vehicle("Ford", "Mustang", "red");

class Car extends Vehicle {
    constructor(public wheels: number, make: string, model: string, color: string) {
        super(make, model, color);
    }

    private drive(): void {
        console.log("Driving :: vroom!");
    }

    public startDrivingProcess(): void {
        this.describeCar();
        this.drive();
        this.honk();
    }

    private describeCar(): void {
        this.describeVehicle();
        console.log(`Wheels: ${this.wheels}`);
    }
}

const car = new Car(4, "Ford", "Mustang", "red");
car.startDrivingProcess();