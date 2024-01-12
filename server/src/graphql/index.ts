export const typeDefs = `
    type User {
        id: String!
        email: String!
        username: String
    }

    type Query {
        user(id: String!): User
        users: [User]
    }
`;

export const resolvers = {
  Query: {},
  Mutation: {},
};
