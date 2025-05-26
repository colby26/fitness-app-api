
const express = require('express');
const router = express.Router();

router.get('/recommended', (req, res) => {
    res.json([
        {
            id: "1",
            title: "Full Body Beginner",
            type: "strength",
            difficulty: "easy",
            duration_minutes: 30,
            exercises: [{ name: "Push-ups", sets: 3, reps: 10 }]
        }
    ]);
});

router.post('/complete', (req, res) => {
    res.json({ status: "logged" });
});

router.get('/history', (req, res) => {
    res.json([]);
});

module.exports = router;
