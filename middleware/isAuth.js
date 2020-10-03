const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    const token = req.body.token;
    try {
        let decoded = await jwt.verify(token, process.env.SECRET);
        next();
    } catch (e) {
        res.status(401).json('Not Authorized');
    }
}