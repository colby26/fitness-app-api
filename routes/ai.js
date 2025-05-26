
const express = require('express');
const router = express.Router();
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

router.post('/chat', async (req, res) => {
    const { message } = req.body;
    try {
        const response = await openai.chat.completions.create({
  	   model: "gpt-4",
           messages: [{ role: "user", content: message }]
           });

        });
        res.json({ reply: response.data.choices[0].message.content });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
