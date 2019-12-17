const {ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true
});

server.listen().then(() => {
    console.log('Corriendo en localhost:4000/graphql')
})