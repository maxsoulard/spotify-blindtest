import { SpotifyApi } from '../spotify-api.js';

export default {
  users: (root, args, context) => {
    return context.prisma.users();
  },
  user: (root, args, context, info) => {
    return context.prisma.user({id: args.id});
  },
  userByName: (root, args, context, info) => {
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
