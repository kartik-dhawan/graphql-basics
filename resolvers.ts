import { PostcardsData, PlacesData } from "./db.ts"
// import { Resolvers } from "./generated/resolvers-types"

export const resolvers = {
  Query: {
    // returns all items from the array
    postcards() {
      return PostcardsData
    },
    places() {
      return PlacesData
    },

    // returns a single item from an array
    singlePostcard(_parent: any, args: any) {
      return PostcardsData.find((postcard) => postcard.id === args.id)
    },
    // returns a single item from an array
    singlePlace(_parent: any, args: any) {
      return PlacesData.find((place) => place.id === args.id)
    },
  },
  Place: {
    postcards(parent: any) {
      return PostcardsData.filter((post) => post.placeId === parent.id)
    },
  },
  Postcard: {
    place(parent: any) {
      return PlacesData.find((place) => place.id === parent.placeId)
    },
  },

  Mutation: {
    addPostcard(parent: any, args: any) {
      let newField = {
        id: Math.floor(Math.random() * 90 + 10).toString(),
        ...args.add,
      }

      PostcardsData.push(newField)

      return newField
    },
    deletePostcard(parent: any, args: any) {
      PostcardsData.filter((post) => post.id !== args.id)

      return true
    },
  },
}
