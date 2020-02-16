class Vehicle {
    constructor(public color: string | null) {}

    drive(): void {
        console.log('chugga chugga');
    }

    honk(): void {
        console.log('beep');
    }
}

class Car extends Vehicle {
    constructor(color: string, public wheels: number) {
        super(color);
    }

    drive(): void {
        console.log('vroom');
    }
}

const car = new Car('orange', 4);
car.drive();
car.honk();
