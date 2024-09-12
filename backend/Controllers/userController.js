const user = require('../Models/User');

const Login = async (req, res) => {
    try {
        const { username, password } = req.body
        const findUsername = await user.findOne({ userName: username })
        if (!findUsername) return res.status(404).json({ message: "User doesn't exist" })
        if (findUsername.password != password) {
            return res.status(401).json({ message: "Credentials doesn't match" })
        }
        return res.status(200).json({ message: "Login Successful!" })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Login Failed!" })
    }
}