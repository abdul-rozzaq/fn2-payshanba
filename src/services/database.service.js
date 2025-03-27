import pg from "pg";
import getConfig from "./config.service.js";

const { Client } = pg

const client = new Client(getConfig("DATABASE_URL"))


const connectToDatabase = async () => {
    try {
        await client.connect()
    } catch (error) {
        console.log("Database connection error", error.message);
    }
}

const setupTables = async () => {
    await client.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        )
    `)
}

export { connectToDatabase, setupTables }
export default client;



