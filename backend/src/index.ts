const { GraphQLServer } = require('graphql-yoga');
import { prisma } from './prisma-client';

import { Query } from './resolvers/query';
import { Mutation } from './resolvers/mutation';
import { User } from './resolvers/user';
import { Game } from './resolvers/game';
import * as dotenv from 'dotenv';
import { SpotifyApi } from './spotify-api';
import * as winston from 'winston';

dotenv.config();

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

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

const spotifyApiMiddleware = async (resolve, parent, args, ctx, info) => {
  await SpotifyApi.refresh();
  return resolve();
}

const server = new GraphQLServer({
  typeDefs: __dirname + '/schema.graphql',
  resolvers,
  middlewares: [spotifyApiMiddleware],
  context: (({request}) => {
    return {
      spotifyUserAuthHeader: request.header('X-Spotify-Authorization'),
      prisma,
      logger,
    }
  }),
});

server.start(opts, () => {
  console.log(`Server is running on http://localhost:4000`);
});
