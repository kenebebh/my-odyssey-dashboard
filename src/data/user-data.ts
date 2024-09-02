import { faker } from "@faker-js/faker";

export type UserType = {
  serialNo?: number;
  userId?: number;
  username: string;
  email: string;
  userImage: string;
  location: string;
  dateJoined: string;
  savedTrips: number;
};

export function createRandomUser<UserType>() {
  return {
    // userId: faker.string.uuid(),
    username: faker.person.fullName(),
    email: faker.internet.email(),
    userImage: faker.image.avatar(),
    location: faker.location.country(),
    dateJoined: faker.date.past({ years: 2 }).toISOString(),
    savedTrips: faker.number.int(50),
  };
}

export const USERS = faker.helpers.multiple(createRandomUser, {
  count: 5,
});
