class Car {
    brand;
    model;
    speed = 0;
   isTrunkOpen = false;


    constructor(carDetails) {
        this.brand = carDetails.brand;
        this.model = carDetails.model;
    }
    
    displayInfo() {
    console.log(`${this.brand} ${this.model}, speed: ${this.speed} km/h`);
    }
    go() {
        this.speed =+ 5;
        if (this.speed > 200) {
            this.speed = 200;
        }
        if (this.isTrunkOpen) {
            this.speed = 0;
            console.log('Cannot drive with trunk open');
        }
    }
    brake() {
        this.speed -= 5;
        if (this.speed < 0) {
            this.speed = 0;
        }  
    }
    openTrunk() {
        this.isTrunkOpen = true;
    }
    closeTrunk() {
        this.isTrunkOpen = false;
    }
}
const car1 = new Car({ brand: 'Toyota', model: 'Corolla' });
const car2 = new Car({ brand: 'Honda', model: 'Civic' });

console.log(car1);
console.log(car2);

car1.closeTrunk();
car1.go();
car1.go();
car1.go();
car1.brake();
car1.displayInfo(); // Toyota Corolla, speed: 15 km/h

car2.displayInfo(); // Honda Civic, speed: 0 km/h
car2.go();
car2.brake();
car2.brake();
car2.displayInfo(); // Honda Civic, speed: 0 km/h