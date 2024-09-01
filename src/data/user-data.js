import { faker } from "@faker-js/faker";

export function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    location: faker.location.country(),
    dateJoined: faker.date.past({ years: 2 }),
    savedTrips: faker.number.int(50),
  };
}

export const USERS = faker.helpers.multiple(createRandomUser, {
  count: 5,
});
