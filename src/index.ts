import express from "express";
import { UserData } from "./DataSource/DataSource";
import { ApolloServer } from 'apollo-server-express'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { typeDef } from "./GraphQL/typeDefs";
import { resolver } from "./GraphQL/resolver";

const app = express();

let apolloServer:any;

const schema = makeExecutableSchema({
    resolvers: resolver,
    typeDefs: typeDef
})


async function startServer () {
    apolloServer = new ApolloServer({
        schema: schema
    })

    await apolloServer.start();
    apolloServer.applyMiddleware({app})
}

startServer()


UserData.initialize().then(() => console.log('DB Connected SucessFully')).catch((err) => console.log(err))


app.listen(4000, () => {
    console.log("running in 4000")
});