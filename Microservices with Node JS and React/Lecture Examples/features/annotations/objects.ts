const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// can ignore name error or change variable name from name to nameObj to avoid top-level variable name duplication
const { age, name: nameObj }: { age: number; name: string } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
