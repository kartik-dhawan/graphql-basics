export const typeDefs = `#graphql
  type Postcard {
    id: ID!
    images: [String!]
    title: String
    price: Float
    quantity: Int
    placeId: String!
    place: Place
  }

  type Place {
    id: ID!
    location: String
    isVisited: Boolean
    postcards: [Postcard]
  }

  # entry point of graph - get data - equivalent to GET API
  type Query {
    postcards: [Postcard]
    singlePostcard(id: ID!): Postcard
    singlePlace(id: ID!): Place
    places: [Place]
  }

  # mutations - update, delete, add - equivalent to PUT, PATCH, POST & DELETE API
  type Mutation {
    addPostcard(add: AddPostcardInput): Postcard
    deletePostcard(id: ID!): [Postcard]
  }

  input AddPostcardInput {
    images: [String!]
    title: String
    price: Float
    quantity: Int
    placeId: String!
  }
`

// int, float, string, boolean, ID (key for data objects)
