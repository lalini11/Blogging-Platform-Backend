const jwt =  require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (request, response, next) => {
    const token = request.headers['authorization'];
    if(!token) return response.status(401).json({message: 'Access Denied'});

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        request.user = decoded;
        next();
    } catch(err) {
        response.status(400).json({message: 'Invalid token'});
    }
};


module.exports = verifyToken;