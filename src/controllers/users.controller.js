import { JWTService } from "../services/jwt.service.js";
import { UsersService } from "../services/users.service.js";



export class UsersController {

    constructor() {
        this.userService = new UsersService()
        this.jwtService = new JWTService()
    }

    async login(req, res) {
        let context = {}

        if (req.method == 'POST') {

            try {
                const { username, password } = req.body

                const user = await this.userService.login(username, password)

                if (user) {
                    const token = this.jwtService.generateToken({ id: user.id })

                    res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });

                    return res.redirect('/')
                }

            } catch (error) {
                context['message'] = error.message
            }
        }

        res.render("login", context)
    }


    async register(req, res) {
        let context = {}

        if (req.method == 'POST') {
            try {
                const userData = req.body
                const result = await this.userService.register(userData)

                if (result) {
                    return res.redirect('/login')
                }

            } catch (error) {
                context['message'] = error.message
            }
        }

        res.render("register", context)
    }
}