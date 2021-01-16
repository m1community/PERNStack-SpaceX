import "reflect-metadata"
import express from "express"
import { ApolloServer } from "apollo-server-express"
import { buildSchema } from "type-graphql"
import cors from "cors"
import { createConnection } from "typeorm"
import { User } from "./entities/User"
import { SpacexContext } from './context/SpacexContext'
import { UserResolver } from "./resolvers/UserResolver"
import Redis from "ioredis"
import session from 'express-session'
import connectRedis from 'connect-redis'
import { COOKIE_NAME, PROD } from "./utils/constants"
import { graphqlUploadExpress } from "graphql-upload"
import path from "path"


const main = async() => {

    const app = express()
    const PORT = 4000
    const RedisStore = connectRedis(session)
    const redisClient = new Redis()

  

    const conn = await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "spoid",
        database: "spacex-db",
        entities: [
            User
        ],
        synchronize: true,
        logging: true
    })

    // await User.delete({})

    app.use(
        graphqlUploadExpress({maxFieldSize: 100000, maxFiles: 20})
    )

    app.use(
        cors({
            origin: "http://localhost:3000",
            credentials: true
        })
    )

    app.use(
        session({
            name: COOKIE_NAME,
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 365, //1 year 
                httpOnly: true,
                sameSite: "lax",
                secure: PROD
            },
            store: new RedisStore({
                client: redisClient, 
                disableTouch: true,
            }),
           
            secret: "knreionbfreouifurubr",
            saveUninitialized: false,
            resave: false
        })
    )

   

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver],
            validate: false
        }),
        context: ({req, res}: SpacexContext) => ({
            req,
            res
        }),
        uploads: false
    })

    app.use("/images", express.static(path.join(__dirname, '../images')))

    apolloServer.applyMiddleware({
        app,
        cors: false
    })

    app.get("/", (_, res) => {
        res.send("Hello server")
    })

    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`)
    })

    // app.listen(PORT, () => {
    //     console.log(`Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}/`)
    // })
}

main().catch(e => console.log(e))