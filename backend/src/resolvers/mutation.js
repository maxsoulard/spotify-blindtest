module.exports = {
  createUser: (root, args, context) => {
    return context.prisma.createUser({name: args.name, score: 0, gamesCount: 0})
  }
}
