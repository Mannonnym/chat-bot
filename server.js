const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'home.html'));
});


app.get('/chat', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'chat.html'));
});

app.post('/chat', (req, res) => {
    const { text } = req.body;
    const lower = text.toLowerCase();

    let reply = "I don't understand 🤔";

    if (lower.includes("hi") || lower.includes("hello")) {
        reply = "Welcome, Asma!";
    } else if (lower.includes("how are you")) {
        reply = "I'm just a bot, but I'm fine 🙂";
    } else if (lower.includes("bye")) {
        reply = "Goodbye! See you soon 👋";
    }

    res.json({ message: reply });
});


app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
