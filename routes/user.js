
const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
    res.json({
        email: "user@example.com",
        name: "John",
        goals: ["weight_loss"],
        fitness_level: "beginner"
    });
});

router.put('/profile', (req, res) => {
    res.json({ status: "updated" });
});

module.exports = router;
