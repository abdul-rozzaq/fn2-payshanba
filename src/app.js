import express from "express";

import cookieParser from "cookie-parser";
import { engine } from "express-handlebars";
import authMiddleware from "./middlewares/auth.middleware.js";
import loggerMiddleware from "./middlewares/logger.middleware.js";
import userRouter from "./routes/user.router.js";
import client from "./services/database.service.js";

const app = express()

app.engine('hbs', engine({ extname: "hbs" }));
app.set('view engine', 'hbs');
app.set('views', './views');


app.use(cookieParser())

app.use(express.urlencoded({ extended: true }))
app.use(loggerMiddleware)
app.use(authMiddleware)

app.use(userRouter)



app.get('/', (req, res) => {
    res.render("home", { user: req.user })
})

app.get('/logout', (req, res) => {
    res.clearCookie("token")

    res.redirect('/')
})



client.connect()

app.listen(4000, () => console.log("Server is running on http://localhost:4000"))



