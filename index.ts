import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { typeDefs } from "./src/schema.ts"
import { resolvers } from "./resolvers.ts"
// import { readFileSync } from "fs"

// const TYPE_DEFS = readFileSync("./schema.graphql", { encoding: "utf-8" })

const server = new ApolloServer({
  // data schema - map of data structure
  typeDefs,

  // resolvers - to handle queries
  resolvers,
})

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
})

console.log("Server ready at url: ", url)
