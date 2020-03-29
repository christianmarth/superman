// https://github.com/expressjs/cookie-parser/
const cookieParser = require('cookie-parser')

export default function CookieParser(moduleOptions) {
    this.addServerMiddleware(cookieParser())
}