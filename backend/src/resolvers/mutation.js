const { userByName } = require('./query')

module.exports = {
  createUser: (root, args, context) => {
    return userResult = context.prisma.createUser({name: args.name, score: 0, gamesCount: 0}).catch(() => userByName(root, args, context))
  },
  updateUserScore: (root, args, context) => {
    return context.prisma.updateUser({data: {score: args.score}, where: {id: args.userId}})
  },
  addGameToHistory: (root, args, context) => {
    return context.prisma.createGameHistory({score: args.score, date: new Date(), user: {connect: {id: args.userId}}})
  },
}
