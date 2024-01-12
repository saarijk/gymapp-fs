import { buildSchema } from "graphql";

const schema = buildSchema(`
   type User {
    id: ID!
    username: String!
    email: String!
  }

  type Query {
        getUsers: [User]
        getUser(id: ID!): User
    }

  type Mutation {
        createUser(username: String!, email: String!): User!
        updateUser(id: ID!, username: String!, email: String!): User!
        deleteUser(id: ID!): ID!
    }
`);

export default schema;
