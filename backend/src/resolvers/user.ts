export const User = {
  gamesHistory: (root, args, context) => {
    return context.prisma.user({id: root.id}).gamesHistory()
  }
}
