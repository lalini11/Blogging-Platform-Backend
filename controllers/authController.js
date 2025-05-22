const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();


exports.signup = async(request, response) => {
    try {
        const { username, email, password } = request.body;
        const hashed = await bcrypt.hash(password, 10);
        const user = await User.create({username, email, password: hashed});

        response.json({ message: 'User registered successfully' , user });
    } catch (err) {
        response.status(400).json({ error: err.message });
    }
};


exports.login = async(request, response) => {
    try {

        const { email, password } = request.body;
        const user = await User.findOne({ where: { email }});
        if(!user) return response.status(400).json({ message: 'User not found' });

        const match = await bcrypt.compare(password, user.password);
        if(!match) return response.status(401).json({message: 'Invalid Password' });

        const token = jwt.sign({ id: user.id, email: user.email }, 
            process.env.JWT_SECRET, {
            expiresIn: '1d',
        });

        response.json({ token, user: { id: user.id, username: user.username } });

    } catch (err) {
        response.status(400).json({ error: err.message });
    }
}