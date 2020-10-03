const jwt = require('jsonwebtoken');
const User = new require('../models/user')

module.exports = async (req, res, next) => {
    try {
        if (req.body.token) {
            const decodedObject = await jwt.verify(req.body.token, process.env.SECRET);
            req.user = await User.findById(decodedObject.userId);
        }
    } catch (e) {

    }
    next()
}