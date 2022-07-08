const passport = require("passport")
const jwt = require("jsonwebtoken")
const dev = process.env.NODE_ENV !== "production"

const REFRESH_TOKEN_EXPIRY = (60 * 60 * 24 * 30)
const REFRESH_TOKEN_SECRET = "fgkjddshfdjh773bdjsj84-jdjd774"
const SESSION_EXPIRY = (60 * 15)
const JWT_SECRET = "jdhdhd-kjfjdhrhrerj-uurhr-jjge"


exports.COOKIE_OPTIONS = {
  httpOnly: true,
  secure: !dev,
  signed: true,
  maxAge: eval(REFRESH_TOKEN_EXPIRY) * 1000,
  sameSite: "none",
}

exports.getToken = user => {
  return jwt.sign(user, JWT_SECRET, {
    expiresIn: eval(SESSION_EXPIRY),
  })
}

exports.getRefreshToken = user => {
  const refreshToken = jwt.sign(user, REFRESH_TOKEN_SECRET, {
    expiresIn: eval(REFRESH_TOKEN_EXPIRY),
  })
  return refreshToken
}

exports.verifyUser = passport.authenticate("jwt", { session: false })
