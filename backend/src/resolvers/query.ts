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
};
