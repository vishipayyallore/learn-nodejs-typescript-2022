interface IVehicle {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,

    summary(): string {
        return `
                Name: ${this.name}
                Year: ${this.year}
                Broken: ${this.broken}
                `;
    },
};

const printVehicle = (vehicle: { name: string, year: Date, broken: boolean }): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
}

printVehicle(oldCivic);

const printVehicleV1 = (vehicle: IVehicle): void => {
    console.log(`Summary: ${vehicle.summary()}`);
}

printVehicleV1(oldCivic);

interface IVehicleV2 {
    summary(): string;
}

const printVehicleV2 = (vehicle: IVehicle): void => {
    console.log(`Summary: ${vehicle.summary()}`);
}

const oldCivicV2 = {
    name: 'Civic V2',
    year: new Date(),
    broken: true,

    summary(): string {
        return `
                Name: ${this.name}
                Year: ${this.year}
                Broken: ${this.broken}
                `;
    },
};

printVehicleV2(oldCivicV2);