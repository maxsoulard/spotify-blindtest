const { GraphQLServer } = require('graphql-yoga');
import { prisma } from './prisma-client';

import { Query } from './resolvers/query.js';
import { Mutation } from './resolvers/mutation.js';
import { User } from './resolvers/user.js';
import * as dotenv from 'dotenv';
import { SpotifyApi } from './spotify-api.js';

dotenv.config();
const resolvers = {
  Query,
  Mutation,
  User,
}

const opts = {
  port: 4000,
  cors: {
    credentials: true,
    origin: ['http://localhost:4200', 'https://spotify-blindtest.now.sh']
  }
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma },
})

// Middleware to check or refresh Spotify access token (1h lifetime)
server.express.use(async (req, res, next) => {
  if (req.method !== 'OPTIONS') {
    console.log(req.header('X-Spotify-Authorization'));
  }
  await SpotifyApi.refresh();
  next();
});

server.start(opts, async () => {
  console.log(`Server is running on http://localhost:4000`);
});
