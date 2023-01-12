export const typeDefs = `

input User {
    id: Int
    name: String
    email: String
    contact: String
    age: Int
}

type Query{
    greet : String!
}

type Mutation {
    createUser(name:String! email:String! contact:String! age:  Int!): String!
}

`