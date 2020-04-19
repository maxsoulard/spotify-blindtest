const { GraphQLServer } = require('graphql-yoga');
import { prisma } from './prisma-client';

import { Query } from './resolvers/query.js';
import { Mutation } from './resolvers/mutation.js';
import { User } from './resolvers/user.js';
import { Game } from './resolvers/game.js';
import * as dotenv from 'dotenv';
import { SpotifyApi } from './spotify-api';

dotenv.config();
const resolvers = {
  Query,
  Mutation,
  User,
  Game,
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
  context: (({request}) => {
    return {
      spotifyUserAuthHeader: `Bearer ${request.header('X-Spotify-Authorization')}`,
      prisma,
    }
  }),
});

// Middleware to check or refresh Spotify access token (1h lifetime)
server.express.use(async (req, res, next) => {
  await SpotifyApi.refresh();
  next();
});

server.start(opts, async () => {
  console.log(`Server is running on http://localhost:4000`);
});
