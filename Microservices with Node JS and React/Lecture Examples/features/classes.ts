class Vehicle {
  //   public drive(): void {
  //     console.log('chugga chugga');
  //   }

  constructor(public color: string) {
    // this.color = color;
  }

  //   color: string;

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('orange');
// vehicle.drive();
// vehicle.honk();
console.log(vehicle.color);

const car = new Car(4, 'red');
// car.drive();
// car.honk();
car.startDrivingProcess();
