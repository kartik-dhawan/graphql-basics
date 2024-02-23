import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from "@apollo/server/express4"
import { typeDefs } from "./src/schema.ts"
import { resolvers } from "./resolvers.ts"
import express from "express"
import cors from "cors"

export const app = express()

const server = new ApolloServer({
  // data schema - map of data structure
  typeDefs,

  // resolvers - to handle queries
  resolvers,
})

await server.start()

app.use(cors())
app.use(express.json())
app.use("/graphql", expressMiddleware(server))
app.get("/", (req, res) => {
  res.json({ name: "kartik" })
})

app.listen(4000, () => {
  console.log("Server ready at url: https://localhost:4000")
  console.log("GraphQL playground ready at url: https://localhost:4000/graphql")
})
