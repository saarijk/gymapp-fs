import users from "./database";
import { randomUUID } from "crypto";

type User = {
  id: string;
  username: string;
  email: string;
};

const getUser = (args: { id: string }): User | undefined => {
  return users.find((user) => user.id === args.id);
};

const getUsers = (): User[] => {
  return users;
};

const createUser = (args: { username: string; email: string }): User => {
  // generate randon uuid for user object
  const generatedId = randomUUID().toString();
  // create user object and save
  const user = { id: generatedId, ...args };
  users.push(user);
  return user;
};

const updateUser = (args: {
  id: string;
  username?: string;
  email?: string;
}): User => {
  const index = users.findIndex((user) => user.id === args.id);
  const user = users[index];

  // update field if it is passed as an argument
  if (args.username) user.username = args.username;
  if (args.email) user.email = args.email;

  return user;
};

const deleteUser = (args: { id: string }): string => {
  // loop through array and delete user with id
  const index = users.findIndex((user) => user.id === args.id);
  if (index !== -1) {
    users.splice(index, 1);
  }

  return args.id;
};

export const root = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
