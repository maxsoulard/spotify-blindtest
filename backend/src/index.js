const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./prisma-client')
const Query = require('./resolvers/query')
const Mutation = require('./resolvers/mutation')
const User = require('./resolvers/user')

const resolvers = {
  Query,
  Mutation,
  User,
}

const server = new GraphQLServer({
  typeDefs: __dirname + '/schema.graphql',
  resolvers,
  context: { prisma }
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
