import client from "./database.service.js";

export class UsersService {

    async login(username, password) {
        const { rows, rowCount } = await client.query(
            "SELECT * FROM users WHERE username = $1 AND password = $2",
            [username, password]
        )

        if (rowCount == 0) throw new Error("Bunday user mavjud emas")

        return rows[0]
    }


    async register(userData) {
        const { rows } = await client.query(
            "INSERT INTO users(username, email, password) VALUES($1, $2, $3) RETURNING *",
            [userData.username, userData.email, userData.password]
        )

        return rows[0]
    }

    async getUserById(id) {
        const { rows, rowCount } = await client.query(
            "SELECT * FROM users WHERE id = $1",
            [id]
        )

        if (rowCount == 0) throw new Error("Bunday user mavjud emas")

        return rows[0]
    }

}