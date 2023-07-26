interface Vehicle {
  name: string;
  // year: number;
  year: Date;
  broken: boolean;
  summary(): string;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  // year: 2000,
  year: new Date(),
  broken: true,
  // broken: 1,
  // isBroken: true,,
  summary(): string {
    return `Name: ${this.name}\nYear: ${this.year}\nBroken?: ${this.broken}`;
  },
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken}`);
};

const printVehicle2 = (vehicle: Vehicle): void => {
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken?: ${vehicle.broken}`);
  console.log(vehicle.summary());
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

// printVehicle(oldCivic);
// printVehicle2(oldCivic);
printSummary(oldCivic);
