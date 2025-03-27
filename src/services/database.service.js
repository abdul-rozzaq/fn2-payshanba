import pg from "pg";

const { Client } = pg

const client = new Client('postgresql://postgres:fZJwLyhWWuyAYboFHHkteLfkOkYZPnyQ@switchback.proxy.rlwy.net:33630/railway')


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



