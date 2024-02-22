import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { typeDefs } from "./schema"
import { resolvers } from "./resolvers"
// import { readFileSync } from "fs"

// const TYPE_DEFS = readFileSync("./schema.graphql", { encoding: "utf-8" })

const server = new ApolloServer({
  // data schema - map of data structure
  typeDefs,

  // resolvers - to handle queries
  resolvers,
})

startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
}).then((res) => {
  console.log(res)
  console.log("Server ready at port: ", 4000)
})
