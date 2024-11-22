const user = require('../Models/User');

const loginUser = async (req, res) => {
    try {
        console.log(req.body)
        const { username, password } = req.body
        const findUsername = await user.findOne({ userName: username })
        console.log(findUsername)
        if (!findUsername) return res.status(404).json({ message: "User doesn't exist" })
        if (findUsername.password != password) {
            return res.status(401).json({ message: "Credentials doesn't match" })
        }
        return res.status(200).json({
            user:findUsername,
            message:"loggedIn"
        })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Login Failed!" })
    }
}

const signupUser = async (req, res) => {
    try {
        console.log(req.body)
        const { username, password } = req.body;
        const findUsername = await user.findOne({ userName: username });
        if (findUsername) {
            return res.status(400).json({ message: "username already exists.." })
        }
        const newUser = new user({
            userName: username,
            password: password
        });
        await newUser.save();
        return res.status(201).json({ meassage: "User registered SuccessFully.." });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "SignUp is Failed! " })
    }
}

module.exports = { loginUser, signupUser }