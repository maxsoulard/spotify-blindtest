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

const opts = {
  port: 4000,
  cors: {
    credentials: true,
    origin: ['http://localhost:4200', 'https://spotify-blindtest-api.now.sh']
  }
};

const server = new GraphQLServer({
  typeDefs: __dirname + '/schema.graphql',
  resolvers,
  context: { prisma },
})
server.start(opts, () => console.log(`Server is running on http://localhost:4000`))
