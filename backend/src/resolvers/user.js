export default {
  gamesHistory: (root, args, context) => {
    return context.prisma.user({id: root.id}).gamesHistory()
  }
}
