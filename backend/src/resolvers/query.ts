import { SpotifyApi } from '../spotify-api.js';

export const Query = {
  users: (root, args, context) => {
    return context.prisma.users();
  },
  user: (root, args, context, info) => {
    return context.prisma.user({id: args.id});
  },
  userByName: (root, args, context) => {
    return context.prisma.user({name: args.name});
  },
  gamesHistory: (root, args, context, info) => {
    return context.prisma.user({id: args.id}).gamesHistory();
  },
  track: (root, args, context) => {
    return SpotifyApi.axios.get(`/tracks/${args.id}`);
  },
  artist: (root, args, context) => {
    return SpotifyApi.axios.get(`/artists/${args.id}`);
  },
};
