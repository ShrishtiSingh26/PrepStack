const userModel = require("../models/user.model")
/**
 * @name registerUserController
 * @desc Register a new user, expects username, email and password in the request body
 * @access Public
 */
async function registerUserController(req, res){
    const {username, email, password} = req.body

    if(!username || !email || !password){
        return res.status(400).json({message: "All fields are required"})
}

const isUseralreadyRegistered = await userModel.findOne({
    $or:[
        {username},
        {email}
    ]
})
    if(isUseralreadyRegistered){
        return res.status(400).json({message: "User already registered with this username or email"})
}}

module.exports = {registerUserController}