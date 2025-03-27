import jwt from "jsonwebtoken";
import getConfig from "./config.service.js";

const JWT_SECRET_KEY = getConfig("JWT_SECRET_KEY")


export class JWTService {

    generateToken(data) {
        const token = jwt.sign(data, JWT_SECRET_KEY, { expiresIn: "1d" })

        return token
    }

    verifyToken(token) {
        const payload = jwt.verify(token, JWT_SECRET_KEY)

        return payload
    }
}

