import pg from "pg";

const { Client } = pg

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "abdurazzoq",
    password: "00123",
    database: "fn2wednesday"
})


export default client;



