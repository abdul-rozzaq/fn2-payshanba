


const loggerMiddleware = (req, res, next) => {

    const date = new Date()

    console.log(`${date.toTimeString()} [${req.method}] ${req.url}`);

    next()
}


export default loggerMiddleware