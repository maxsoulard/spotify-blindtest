import { Query } from './query';
import { SpotifyApi } from '../spotify-api';
import * as _ from 'lodash';

export const Mutation = {
  createUser: (root, args, context) => {
    return context.prisma.createUser({name: args.name, score: 0, gamesCount: 0}).catch(() => Query.userByName(root, args, context));
  },

  updateUserScore: (root, args, context) => {
    return context.prisma.updateUser({data: {score: args.score}, where: {id: args.userId}});
  },

  addGameToHistory: (root, args, context) => {
    return context.prisma.createGameHistory({score: args.score, date: new Date(), user: {connect: {id: args.userId}}});
  },

  startNewGame: async (root, args, context) => {
    const game = await context.prisma.createGameHistory({score: 0, date: new Date(), user: {connect: {id: args.userId}}});
    const response = await SpotifyApi.get(`/me/albums?limit=1`, { 'Authorization': context.spotifyUserAuthHeader });

    const firstOffset = Math.floor(Math.random() * Math.floor(response.data.total));
    const secondOffset = Math.floor(Math.random() * Math.floor(response.data.total));

    const firstAlbums = await SpotifyApi.get(`/me/albums?limit=20&offset=${firstOffset}`, { 'Authorization': context.spotifyUserAuthHeader });
    const secondAlbums = await SpotifyApi.get(`/me/albums?limit=20&offset=${secondOffset}`, { 'Authorization': context.spotifyUserAuthHeader });

    const items = [..._.sampleSize(firstAlbums.data.items, 5), ..._.sampleSize(secondAlbums.data.items, 5)];
    const tracks = items.map(item => _.sample(item.album.tracks.items));
    return {id: game.id, tracks};
  },
}
