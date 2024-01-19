import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import hardcoded from "./hardcoded";

// Defining a resolver to fetch the types defined in schema
const resolvers = {
  Query: {
    users() {
      return hardcoded.users;
    },
    workouts() {
      return hardcoded.workouts;
    },
  },
};

// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
