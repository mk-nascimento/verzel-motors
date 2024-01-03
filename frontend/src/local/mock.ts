import { faker } from "@faker-js/faker";

function genCar(user_id: string) {
  return {
    id: faker.string.uuid(),
    make: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    year: 2022,
    photo: "https://placehold.co/320",
    price: faker.finance.amount(12000, 100000, 2, "R$ ", true),
    user_id,
  };
}
function genUser() {
  const id = faker.string.uuid();

  return {
    id,
    username: faker.internet.userName(),
    password: faker.internet.password(),
    vehicles: Array.from({ length: faker.number.int(10) }, () => genCar(id)),
  };
}

export interface User extends ReturnType<typeof genUser> {}
export interface Vehicles extends ReturnType<typeof genCar> {}

const users: User[] = Array.from({ length: 5 }, genUser);
const vehicles: Vehicles[] = users.reduce(
  (acc, user) => [...acc, ...user.vehicles],
  [] as Vehicles[],
);

export default { users, vehicles } as const;
