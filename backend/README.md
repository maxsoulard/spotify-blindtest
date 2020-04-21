# Description
This is a backend to my Spotify-Blindtest pet project. It can store user's games history and score in a prisma cloud instance. 
GraphQL playground available at:
https://spotify-blindtest-api.herokuapp.com/
And 
https://spotify-blindtest-api.now.sh

# Run and debug
`npm run start:back`

`npm run debug:back`

# Prisma CLI
Deploy an update of prisma database schema on prisma cloud:

`npx prisma deploy`

Re-generate prisma client:

`npx prisma generate`

# GraphQL query examples
```
query ($userId: ID!) {
  user(id: $userId) {
    id
    name
    gamesHistory {
      ...gameHistory
    }
  }
}

fragment gameHistory on GameHistory {
      date
      score
}
```
```
mutation AddGameToHistory($userId: ID!, $score: Int!) {
  addGameToHistory(userId: $userId, score: $score) {
    id
    score
    date
  }
}
```
