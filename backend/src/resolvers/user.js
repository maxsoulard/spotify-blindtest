module.exports = {
  gamesHistory: (root, args, context, info) => {
    return context.prisma.user({id: root.id}).gamesHistory()
  }
}
