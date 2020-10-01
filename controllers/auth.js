const User = new require('../models/user');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;
exports.login = async (req, res, next) => {
    console.log(SECRET);
    let username = req.body.username;
    let password = req.body.password;
    try {
        const user = await User.findOne({username: username});
        if (user && await bcryptjs.compare(password, user.password)) {
            const token = jwt.sign(
                {userId: user._id, email: user.email, isAdmin: user.isAdmin},
                SECRET,
                {expiresIn: '1h'});
            return res.status(200).json({token: token})
        }
        else{
            res.status(401).json('Unauthorized');
        }
    } catch (e) {
        res.status(401).json(e);
        return new Error(e)
    }
}
exports.register = async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    try {
        const encryptedPass = await bcryptjs.hash(password, 12)
        const newUser = new User({username: username, password: encryptedPass, email: email});
        await newUser.save();
        return res.status(200).json("Registered Successfully");
    } catch (e) {
        res.status(400).json(e);
        return new Error(e);
    }
}