
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Replace with real DB logic
const users = [];

router.post('/register', async (req, res) => {
    const { email, password, name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { id: Date.now().toString(), email, password: hashedPassword, name };
    users.push(user);
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.json({ token, user_id: user.id });
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.json({ token, user_id: user.id });
});

module.exports = router;
