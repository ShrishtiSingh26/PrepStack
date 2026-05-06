const express = require("express")

const app = express()

app.use(express.json())
const authRouter = require("./routes/auth.routes")


app.use("/api/auth", authRouter)

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
authRouter.post("/register", authController.registerUserController)
module.exports = app

