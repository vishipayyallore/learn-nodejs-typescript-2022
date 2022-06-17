interface IReportable {
    summary(): string;
}

const vehicle = {
    name: 'Zen',
    year: new Date(),
    broken: true,

    summary(): string {
        return `
                Vehicle Summary
                --------------------------------
                Name: ${this.name}
                Year: ${this.year}
                Broken: ${this.broken}
                `;
    },
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,

    summary(): string {
        return `
                Drink Summary
                --------------------------------
                Color: ${this.color}
                Carbonated: ${this.carbonated}
                Sugar: ${this.sugar}
                `;
    },
};


const printSummary = (item: IReportable): void => {
    console.log(`${item.summary()}`);
}

printSummary(vehicle);
printSummary(drink);