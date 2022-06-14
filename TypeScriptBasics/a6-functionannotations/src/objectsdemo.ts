
const profile = {
    name: 'John',
    age: 30,
    coors: {
        lat: 0,
        lng: 15
    },

    setAge(age: number): void {
        this.age = age;
    }
};

// const age = profile.age;
// Destructuring
const { age }: { age: number } = profile;
console.log(`Age: ${age}`);

// const coors = profile.coors;
const { coors: { lat, lng } }: { coors: { lat: number, lng: number } } = profile;
console.log(`Lat: ${lat} Lng: ${lng}`);
