const { gql } = require('apollo-server');

const typeDefs = gql`
    type Task {
        id: ID
        name: String
        description: String
        completed: Boolean
    }

    type Query {
        tasks: [Task]
        task(id: Int!): Task
    }

    type Mutation {
        addTask(
            name: String,
            description: String,
            completed: Boolean
        ): Task

        deleteTask(
            id: Int
        ): DeleteResponse
    }

    type DeleteResponse {
        ok: Boolean!
    }
`;

module.exports = typeDefs;