import {DataSource} from 'typeorm'
import * as dotenv from 'dotenv'

dotenv.config()

export const UserData = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    synchronize: false,
    entities : ["src/Entity/*.ts"],
    insecureAuth : true
})