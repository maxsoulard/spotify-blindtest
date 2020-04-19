export const Game = {
  user: (root, args, context, info) => {
    return context.prisma.user({id: args.userId});
  },
};
