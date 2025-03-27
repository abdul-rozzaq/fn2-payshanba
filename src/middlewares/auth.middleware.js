import { JWTService } from "../services/jwt.service.js"
import { UsersService } from "../services/users.service.js"

const jwtService = new JWTService()
const usersService = new UsersService()

const authMiddleware = async (req, res, next) => {
    const { token } = req.cookies

    if (token) {
        try {
            const { id } = jwtService.verifyToken(token)

            const user = await usersService.getUserById(id)

            req.user = user
        } catch (error) {
            console.log(error.message);
            console.log('Token eskirgan');
        }
    }

    next()
}


export default authMiddleware