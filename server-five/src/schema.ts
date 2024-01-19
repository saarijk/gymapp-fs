export const typeDefs = `#graphql
    type User {
        id: ID!,
        username: String!,
        email: String!,
    }

    type Workout {
        id: ID!,
        name: String!
    }

    type Query {
        users: [User!],
        workouts: [Workout!]
    }
`;

// types can contain int, float, String, boolean, and ID properties
// "type" + name of type, and properties inside curly brackets
// "!" means the property can't be null
